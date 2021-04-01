import React, { useState, useCallback, useEffect, ChangeEvent, useRef } from "react"
import { useHistory } from "react-router-dom"
import { FormHandles } from "@unform/core"
import { Form } from "@unform/web"
import * as yup from "yup"
import api from "../../services/api"
import getIsAuth from "../../services/getIsAuth"
import getValidationErrors from "../../utils/getValidationErrors"
import { maskCPF, removeMaskCPF } from "../../utils/mask"

import Header from "../../components/Header"
import Input from "../../components/Input"
import Loader from "../../components/Loader"
import { toast } from "react-toastify"
import { AnyObject } from "../../types/utils"
import { UserResponse } from "../../types/user"
import updateReduxState from "../../services/updateReduxState"
import womanBank from "../../assets/picture-woman.png"
import cardBank from "../../assets/cards.png"

const Landing: React.FC = () => {
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [cpf, setCpf] = useState("")
  const [cpfMask, setCpfMask] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const formRef = useRef<FormHandles>(null)

  const [isFilled, setIsFilled] = useState(false)

  // Atualiza a mascara do CPF
  useEffect(() => {
    // devemos setar o estado
  }, [cpfMask])

  // Atualiza se todos os campos estão preenchidos para deixar o botão de confirmar verde
  useEffect(() => {
    if (
      name.length > 3 &&
      password &&
      confirmPassword &&
      cpf.length === 11 &&
      username
    )
      setIsFilled(true)
    else setIsFilled(false)
  }, [confirmPassword, cpf.length, name.length, password, username])

  // Lidar com o registro
  const handleSubmit = useCallback(
    async (data: AnyObject) => {
      const filteredData: AnyObject = {}

      Object.keys(data).forEach((key) => {
        filteredData[key] = data[key].trim()
      })

      setLoading(true)

      try {
        formRef.current?.setErrors({})

        const schema = yup.object().shape({
          cpf: yup.string().min(14, "Obrigatório ter 11 digitos"),
          username: yup.string().required("Nome de usuário obrigatório "),
          name: yup.string().required("Nome completo obrigatório"),
          password: yup.string().min(6, "No mínimo 6 digitos"),
          confirmPassword: yup.string().min(6, "No mínimo 6 digitos"),
        })

        await schema.validate(filteredData, {
          abortEarly: false,
        })

        if (password !== confirmPassword) {
          return
        }

        const { status } = await api.post("/usuarios", {
          cpf: cpf,
          login: username,
          nome: name,
          senha: password,
        })

        if (status === 200 || status === 201) {
          const { data } = await api.post<UserResponse>("/login", {
            usuario: username,
            senha: password,
          })

          localStorage.setItem("@token_user", data.token)
          localStorage.setItem("@user_name", data.usuario.nome)
          updateReduxState()

          toast.success("Usuário registrado!")
          history.push("/dashboard")
        } else {
          toast.error("Ocorreu algum erro!")
          history.push("/error")
        }
      } catch (err) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
        toast.error("O formulário está incorreto!")
      } finally {
        setLoading(false)
      }
    },
    [cpf, username, name, password, confirmPassword, history]
  )

  // Check if user is authenticated
  const handleRedirectToLogin = useCallback(() => {
    const isAuth = getIsAuth()

    if (isAuth) history.push("/dashboard")
    else history.push("/login")
  }, [history])

  const handleSetCpfMask = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCpfMask(maskCPF(removeMaskCPF(e.target.value)))
  }, [])

  return (
    <>
      <Header />

      <section className="abraconta">
        <div>
          <img src={womanBank} alt="Garota propaganda" />
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet <b>consectetur</b>
          </p>
        </div>
      </section>

      <section>
        <figure className="pecaagora">
          <figcaption className="text">
            <p>
              {" "}
              Peça já
              <br /> seu cartão <br />
              <b>Solidty</b>
            </p>
            <p className="legend">
              Duis aute irure dolor in
              <br /> reprehenderit in voluptate
              <br /> velit esse cillum nulla pariatur.
            </p>
          </figcaption>
        </figure>
      </section>

      <section className="cards">
        <div className="card">
          <img src={cardBank} alt="Cartões Solidty" />
        </div>
        <div className="content">
          <p>
            Confiança <br />
            <b>e solidez</b>
          </p>
          <p>
            Duis aute irure
            <br />
            dolor in
            <br />
            reprehenderit in
            <br />
            voluptate
            <br />
            velit esse cilium
            <br />
            nulla pariatur
          </p>
        </div>
      </section>

      <section>
        <div>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1> Peça sua conta e cartão de crédito do Gama Bank</h1>
            <Input
              name="cpf"
              maxLength={14}
              value={cpfMask}
              onChange={handleSetCpfMask}
              placeholder="Digite seu CPF"
            />
            <Input
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nome de usuário"
            />
            <Input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome completo"
            />
            <Input
              name="password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />
            <Input
              name="confirmPassword"
              value={confirmPassword}
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirme sua senha"
            />
            {loading ? <Loader /> : <button type="submit">Criar sua conta</button>}
          </Form>
        </div>
      </section>
    </>
  )
}

export default Landing
