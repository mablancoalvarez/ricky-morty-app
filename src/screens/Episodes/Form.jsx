import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const [status, setStatus] = useState('');
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setStatus('');
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Error enviando el formulario');
      }
      reset();
      setStatus('Comentario enviado');
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <form className='comment-form' onSubmit={handleSubmit(onSubmit)}>
      <div className='comment-form__field'>
        <label htmlFor='nombre'>Nombre</label>
        <input
          type='text'
          id='nombre'
          {...register('nombre', { required: true })}
          placeholder='Morty'
          aria-describedby='nombre-error'
        />
        {errors.nombre && (
          <span id='nombre-error' className='error'>
            Este campo es obligatorio.
          </span>
        )}
      </div>
      <div className='comment-form__field'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          placeholder='morty@example.com'
          aria-describedby='email-error'
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <span id='email-error' className='error'>
            Por favor, ingresa un email válido.
          </span>
        )}
      </div>
      <div className='comment-form__field'>
        <label htmlFor='comment'>Comentario</label>
        <textarea
          id='comment'
          placeholder='Escribe tu comentario...'
          aria-describedby='comment-error'
          {...register('comment', { required: true, maxLength: 500 })}
        />
        {errors?.comment?.type === 'required' && (
          <span id='comment-error' className='error'>
            Este campo es obligatorio.
          </span>
        )}
        {errors?.comment?.type === 'maxLength' && (
          <span id='comment-error' className='error'>
            El comentario no puede exceder los 500 caracteres.
          </span>
        )}
      </div>
      <button className='comment-form__button' type='submit' aria-label='Enviar comentario'>
        Enviar
      </button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default Form;
