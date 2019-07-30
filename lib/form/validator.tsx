import { FormValue } from "./form";

interface FormRule {
  key: string
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  validator?: (value: string) => Promise<string>
}

type FormRules = Array<FormRule>

function isEmpty(value: any) {
  return value === undefined || value === null || value === ''
}

function hasError(item: [string, undefined] | [string, string]): item is [string, string] {
  return typeof item[1] === 'string'
}

export function noError(errors: any) {
  return Object.keys(errors).length === 0
}

type OneError = string | Promise<string>

const Validator = (formValue: FormValue, rules: FormRules, callback: (errors: any) => void): void => {
  let errors: { [key: string]: OneError[] } = {}
  const addError = (key: string, error: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = []
    }
    errors[key].push(error)
  }

  rules.map(rule => {
    const value = formValue[rule.key]
    if (rule.validator) {
      const promise = rule.validator(value)
      addError(rule.key, promise)
    }
    if (rule.required && isEmpty(value)) {
      addError(rule.key, 'required')
    }
    if (rule.minLength && !isEmpty(value) && value!.length < rule.minLength) {
      addError(rule.key, 'minLength')
    }
    if (rule.maxLength && !isEmpty(value) && value!.length > rule.maxLength) {
      addError(rule.key, 'maxLength')
    }
    if (rule.pattern) {
      if (!(rule.pattern.test(value))) {
        addError(rule.key, 'pattern')
      }
    }
  })

  const flatternErrors = flat(Object.keys(errors).map(
    key => errors[key].map<[string, OneError]>(error => [key, error])))

  const newPromise = flatternErrors.map(
    ([key, promiseOrString]) =>
      (promiseOrString instanceof Promise ? promiseOrString : Promise.reject(promiseOrString))
        .then(() => [key, undefined], (reason) => [key, reason])
  )
  Promise.all(newPromise).then(results => {
    callback(zip(results.filter(hasError)))
  })
}

export default Validator

function flat<T>(array: Array<T | T[]>) {
  const result: T[] = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) { // T[]
      result.push(...array[i] as T[])
    } else { // T
      result.push(array[i] as T)
    }
  }
  return result
}

// kvList = [['username', 'e1'], ['username', 'e2']]
function zip(kvList: Array<[string, string]>) {
  const result: { [key: string]: string[] } = {}
  kvList.map(([key, value]) => {
    // kv = ['username', 'e1']
    result[key] = result[key] || []
    result[key].push(value)
  })
  return result
}
