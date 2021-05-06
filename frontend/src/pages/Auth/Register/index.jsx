import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { GoMortarBoard } from "react-icons/go"
import { RiBuilding4Fill, RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import { makeRequest } from "../../../core/utils/request";
import AuthCard from "../Card";
import history from "../../../core/utils/history";
import { useRef, useState } from "react";
import { BASE_URL } from "../../../core/utils/auth";

function Register() {
  const { register, handleSubmit, errors, watch } = useForm();
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    const payload = {
      email: data.email,
      name: data.name,
      password: data.password,
      university: data.university,
      roles: {
        id: data.role
      }
    }
    makeRequest({
      url: `${BASE_URL}/register`,
      method: "POST",
      data: payload,
    })
      .then(() => {
        history.push("/login");
        // toast.success("Cadastro realizado com sucesso!");
      })
      .catch(() => {
        // toast.error("Falha ao realizar cadastro!");
      });
  };

  const onShowPassword = (show) => {
    show === "show1" ? setShow1(!show1) : setShow2(!show2);
  };

  return (
    <AuthCard title="CADASTRE-SE">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label className="label-registrar">
          <AiOutlineUser className="icon-registrar-input" />
          <input
            className="input-registrar"
            type="text"
            placeholder="Insira seu nome"
            name="name"
            ref={register({
              required: "Você deve especificar um nome"
            })}
          />
          {errors.name && (
            <small className="invalid">{errors.name.message}</small>
          )}
        </label>

        <div className="selects-inputs">
          <label className="label-registrar-person-1">
            <RiBuilding4Fill className="icon-registrar-input" />
            <select
              className="input-registrar select-input rezise-width-1"
              type="text"
              placeholder="Escolha o colégio ou universidade"
              name="university"
              ref={register({
                required: "Você deve escolher uma instituição!"
              })}
            >
              <option value="Universidade Federal de Goiás">UFG - Universidade Federal de Goiás</option>
            </select>
            {errors.university && (
              <small className="invalid">{errors.university.message}</small>
            )}
          </label>

          <label className="label-registrar-person-2">
            <GoMortarBoard className="icon-registrar-input" />
            <select
              className="input-registrar select-input rezise-width-2"
              type="text"
              placeholder="Escolha entre professor e aluno."
              name="role"
              ref={register({
                required: "Você deve escolher um cargo!"
              })}
            >
              <option value="1">Aluno</option>
              <option value="2">Professor</option>
            </select>
            {errors.role && (
              <small className="invalid">{errors.role.message}</small>
            )}
          </label>
        </div>

        <label className="label-registrar">
          <AiOutlineMail className="icon-registrar-input" />
          <input
            className="input-registrar"
            type="email"
            placeholder="Email"
            name="email"
            ref={register({
              required: "Você deve especificar um e-mail!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Insira um e-mail válido!",
              },
            })}
          />
          {errors.email && (
            <small className="invalid">{errors.email.message}</small>
          )}
        </label>

        <label className="label-registrar">
          <RiLockPasswordLine className="icon-registrar-input" />
          <input
            className="input-registrar"
            type={show1 ? "password" : "text"}
            placeholder="Digite sua senha (min. 6 caracteres)"
            name="password"
            ref={register({
              required: "Você deve especificar uma senha!",
              minLength: {
                value: 6,
                message: "A senha deve ter ao menos 6 caracteres!",
              },
            })}
          />
          {show1 ? (
            <AiOutlineEyeInvisible
              className="icon-show-input"
              onClick={() => onShowPassword("show1")}
            />
          ) : (
            <AiOutlineEye
              className="icon-show-input"
              onClick={() => onShowPassword("show1")}
            />
          )}
          {errors.password && (
            <small className="invalid">{errors.password.message}</small>
          )}
        </label>

        <label className="label-registrar">
          <RiLockPasswordLine className="icon-registrar-input" />
          <input
            className="input-registrar"
            type={show2 ? "password" : "text"}
            placeholder="Repita a sua senha"
            name="password_repeat"
            ref={register({
              required: "Campo obrigatório!",
              validate: (value) =>
                value === password.current || "As senhas não coincidem!",
            })}
          />
          {show2 ? (
            <AiOutlineEyeInvisible
              className="icon-show-input"
              onClick={() => onShowPassword("show2")}
            />
          ) : (
            <AiOutlineEye
              className="icon-show-input"
              onClick={() => onShowPassword("show2")}
            />
          )}
          {errors.password_repeat && (
            <small className="invalid">{errors.password_repeat.message}</small>
          )}
        </label>

        <Link to="/login" className="link">
          Já possui um login?
        </Link>

        <input
          type="submit"
          className="submit-registrar btn btn-second"
          value="CADASTRAR"
        />
      </form>
    </AuthCard>
  );
}

export default Register;
