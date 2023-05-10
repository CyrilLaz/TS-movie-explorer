import { useState, useCallback } from 'react';

export function useFormValidator(mode) {
  const [errors, setErrors] = useState({});
  const [isFormInvalid, setIsFormInvalid] = useState(true);

  const handleValidForm = (event) => {
    const target = event.target;
    const name = target.name;
    if (mode) {
      const modeItem = mode.find((item) => item.name === name);
      if (modeItem) {
        if (!event.target.value || modeItem.validator(event)) {
          target.setCustomValidity('');
        } else {
          target.setCustomValidity(modeItem.message);
        }
      }
    }
    setIsFormInvalid(!target.closest('form').checkValidity());
    setErrors({ ...errors, [name]: target.validationMessage });
  };

  const resetForm = useCallback(
    (e, newErrors = {}, newIsFormInvalid = true) => {
      if (e) {
        const form = e.target.closest('form');
        form.reset();
        form.querySelectorAll('input').forEach((element) => {
          // сбрасываю состояние invalid с инпутов
          element.setCustomValidity('');
        });
      }

      setErrors(newErrors);
      setIsFormInvalid(newIsFormInvalid);
    },
    [setErrors, setIsFormInvalid]
  );

  const toggleButtonDisable = useCallback(
    (state) => {
      setIsFormInvalid(state);
    },
    [setIsFormInvalid]
  );

  return [
    handleValidForm,
    errors,
    isFormInvalid,
    resetForm,
    toggleButtonDisable,
  ];
}
