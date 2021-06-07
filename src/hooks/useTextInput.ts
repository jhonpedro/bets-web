import React, { useCallback, useMemo, useState } from 'react'

// eslint-disable-next-line no-unused-vars
type Validator = (toValidate: string) => boolean

type UseTextInputReturn = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  boolean,
  boolean,
  () => {}
]

const useTextInput = (validator: Validator): UseTextInputReturn => {
  const [value, setValue] = useState('')
  const [wasTouched, setWasTouched] = useState(false)

  const isValid = useMemo(() => validator(value), [value])
  const wasTouchedAndIsInvalid = wasTouched && !isValid

  const onBlur = useCallback(() => {
    setWasTouched(true)
    return {}
  }, [])

  return [value, setValue, isValid, wasTouchedAndIsInvalid, onBlur]
}

export default useTextInput
