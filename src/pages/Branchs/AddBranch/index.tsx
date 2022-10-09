import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BASE_URL } from '../../../config';
type Inputs = {
  name: string;
};
export default function AddBranch() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { getAccessTokenSilently } = useAuth0();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const token = await getAccessTokenSilently();

      const rawResponse = await fetch(`${BASE_URL}/branchs`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: data.name }),
      });
      const content = await rawResponse.json();
      alert(content);
    } catch (e) {
      const err = e as Error;
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>AddBranch</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('name', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.name && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}
