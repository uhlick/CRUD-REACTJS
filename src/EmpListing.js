import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from 'react-icons/ai'
import perfil from 'C:/Users/Uhlick/WorkSpace/Goalfy/src/perfil.png'


const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/Goalfy/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/Goalfy/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Deseja remover o registro?')) {
            fetch("http://localhost:8000/Goalfy/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removido com sucesso.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }


    useEffect(() => {
        fetch("http://localhost:8000/Goalfy").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container-header">
                        <div className="header">
                <div className="header-part1">
                <h1 className="logo">Goalfy</h1>
                <svg className="header-divider" width="1" height="18" viewBox="0 0 1 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1" height="18" fill="#E6E6E6"/>
                        </svg>
                            <svg className="svg-logo-header" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 6.00001C3.28174 6.00001 2.97652 6.12643 2.75147 6.35148C2.52643 6.57652 2.4 6.88175 2.4 7.20001V20.4C2.4 20.7183 2.52643 21.0235 2.75147 21.2485C2.97652 21.4736 3.28174 21.6 3.6 21.6H16.8C17.1183 21.6 17.4235 21.4736 17.6485 21.2485C17.8736 21.0235 18 20.7183 18 20.4V13.2C18 12.5373 18.5373 12 19.2 12C19.8627 12 20.4 12.5373 20.4 13.2V20.4C20.4 21.3548 20.0207 22.2705 19.3456 22.9456C18.6705 23.6207 17.7548 24 16.8 24H3.6C2.64522 24 1.72955 23.6207 1.05442 22.9456C0.379285 22.2705 0 21.3548 0 20.4V7.20001C0 6.24523 0.379284 5.32955 1.05442 4.65442C1.72955 3.97929 2.64522 3.60001 3.6 3.60001H10.8C11.4627 3.60001 12 4.13726 12 4.80001C12 5.46275 11.4627 6.00001 10.8 6.00001H3.6Z" fill="#7F23F7"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3999 1.2C14.3999 0.537258 14.9372 0 15.5999 0H22.7999C23.4626 0 23.9999 0.537258 23.9999 1.2V8.4C23.9999 9.06274 23.4626 9.6 22.7999 9.6C22.1372 9.6 21.5999 9.06274 21.5999 8.4V2.4H15.5999C14.9372 2.4 14.3999 1.86274 14.3999 1.2Z" fill="#7F23F7"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6484 0.351472C24.1171 0.820101 24.1171 1.5799 23.6484 2.04853L10.4484 15.2485C9.9798 15.7172 9.22 15.7172 8.75137 15.2485C8.28275 14.7799 8.28275 14.0201 8.75137 13.5515L21.9514 0.351472C22.42 -0.117157 23.1798 -0.117157 23.6484 0.351472Z" fill="#7F23F7"/>
                                </svg>
                <div className="register-logo">Registro de Clientes</div> 
                </div>

                <div className="header-part2">            
                <div className="membros">Membros (20)</div>  
                <svg width="1" height="18" viewBox="0 0 1 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1" height="18" fill="#E6E6E6"/>
                        </svg>
                        <div className="profile">
                        <img src={perfil} width="32px"/>
                        

                            </div>  </div>


            </div>
            <svg width="100%" height="1" viewBox="0 0 100% 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="1" fill="#F2F2F2"/>
                    </svg>
                    <div className="containerr">


                                <div className="divbtn">
                        <Link to="Goalfy/create" className=" btn-succes"> Novo Registro</Link>
 
                    </div>
                    <div className="form-group">
                                            <AiOutlinePlusCircle   className="icon-plus"
                                                style={{
                                                    position: 'absolute', display: 'flex', right: '441px', top: '139px', color: '#949FA6',width: '18px', height: '20px',
                                                                }}size="50px" color="white"/> 
                                           
                                        </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr className="tr-cabecalho">
                                <td className="td-cabecalho-nome">Nome do Cliente</td>
                                <td className="td-cabecalho">Email</td>
                                <td className="td-cabecalho">Telefone</td>
                                <td className="td-cabecalho">CNPJ</td>
                                <td className="td-cabecalho">Endereço</td>
                                <td className="td-cabecalho">Cidade</td>
                                <td className="td-cabecalho-fim"></td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr className="tr-wallpaper" key={item.id}>
                                        <td className="td-cabecalho-nome">{item.nome}</td>
                                        <td className="td-cabecalho">{item.email}</td>
                                        <td className="td-cabecalho">{item.telefone}</td>
                                        <td className="td-cabecalho">{item.cnpj}</td>
                                        <td className="td-cabecalho">{item.endereco}</td>
                                        <td className="td-cabecalho">{item.cidade}</td>
                                        <td className="td-cabecalho-fim">
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remover</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
        </div>
                </div>
    );
}

export default EmpListing;