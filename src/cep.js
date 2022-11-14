import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function CepJS() {

  const {register, handleSubmit, setValue, setFocus} = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      // register({ name: 'address', value: data.logradouro });
      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.localidade);
      setValue('uf', data.uf);
      setFocus('addressNumber');
    });
  }

  return (
    <div className='card-box'>
    <form className='card-cep' onSubmit={handleSubmit(onSubmit)}>
      <div className='header-consulta'>
      <h2 className='newcliente'>CONSULTA</h2>
      <a class="btn-close-consulta" href="/Goalfy/create">✕</a>
      </div>
      <label className='cep-label'>
        CEP:
        <input className='col-lg-13' type="text" {...register("cep")} onBlur={checkCEP} />
      </label>
      <label className='cep-label'>
        Rua:
        <input className='col-lg-13' type="text" {...register("address" )}/>
      </label>
      <label className='cep-label'>
        Número:
        <input className='col-lg-13' type="text" {...register("addressNumber" )}/>
      </label>
      <label className='cep-label'>
        Bairro:
        <input className='col-lg-13' type="text" {...register("neighborhood" )}/>
      </label>
      <label className='cep-label'>
        Cidade:
        <input className='col-lg-13' type="text" {...register("city" )}/>
      </label>
      <label className='cep-label'>
        Estado:
        <input className='col-lg-13' type="text" {...register("uf" )}/>
      </label>
    </form>
    </div>
  );
}

export default CepJS;
