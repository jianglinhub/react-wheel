import * as React from 'react'
import { useState } from 'react'
import Form, { FormValue } from './form'
import Validator, { noError } from './validator'
import Button from '../button/button'

const usernames = ['frankfrank', 'jack', 'alice', 'bob']
const checkUserName = (username: string, succeed: () => void, failed: () => void) => {
  setTimeout(() => {
    if (usernames.indexOf(username) >= 0) {
      failed()
    } else {
      succeed()
    }
  }, 2000)
}

const FormExample: React.FC = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  })
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ])
  const [errors, setErrors] = useState({})
  const validator = (username: string) => {
    return new Promise<string>((resolve, reject) => {
      checkUserName(username, resolve, () => reject('unique'))
    })
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      { key: 'username', required: true },
      { key: 'username', minLength: 8, maxLength: 16 },
      { key: 'username', validator },
      { key: 'username', validator },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
      { key: 'password', required: true },
      { key: 'password', validator },
      { key: 'password', validator },
    ]
    Validator(formData, rules, (errors) => {
      setErrors(errors)
      if (noError(errors)) {
        //  没有错误
      }
    })
  }

  const transformError = (message: string) => {
    const map: any = {
      unique: 'username is taken',

    }
    return map[message]
  }

  return (
    <Form
      fields={fields}
      value={formData}
      buttons={
        <React.Fragment>
          <Button type="submit" level="important">提交</Button>
          <Button>返回</Button>
        </React.Fragment>
      }
      errors={errors}
      transformError={transformError}
      onChange={(newValue) => setFormData(newValue)}
      onSubmit={onSubmit}
    />
  )
}

export default FormExample