(this.webpackJsonpgamabank = this.webpackJsonpgamabank || []).push([
  [0],
  {
    334: function (e, t) {},
    336: function (e, t) {},
    349: function (e, t) {},
    351: function (e, t) {},
    379: function (e, t) {},
    380: function (e, t) {},
    385: function (e, t) {},
    387: function (e, t) {},
    394: function (e, t) {},
    413: function (e, t) {},
    449: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        c = a.n(n),
        r = a(40),
        s = a.n(r),
        o = a(11),
        i = a(8),
        u = a(32),
        l = a(45),
        j = a.n(l),
        b = a(74),
        d = a(9),
        O = a(58),
        h = a(75),
        m = a(20),
        x = a(206),
        A = a
          .n(x)
          .a.create({
            baseURL: "https://accenture-java-desafio.herokuapp.com",
          }),
        g = a(43),
        v = a.n(g),
        f = function () {
          var e = localStorage.getItem("@token_user");
          if (!e) return !1;
          var t = e.split(" ")[1];
          return (
            !(v.a.decode(t).exp < Date.now() / 1e3) ||
            (localStorage.removeItem("@token_user"),
            localStorage.removeItem("@user_name"),
            window.location.reload(),
            !1)
          );
        },
        p = function () {
          return !(!localStorage.getItem("@token_user") || !f());
        };
      function E(e) {
        var t,
          a = {};
        return (
          null === (t = e.inner) ||
            void 0 === t ||
            t.forEach(function (e) {
              a[e.path] = e.message;
            }),
          a
        );
      }
      var S,
        R = a(2),
        I = function () {
          var e = Object(i.g)();
          return Object(R.jsx)("img", {
            onClick: function () {
              return e.push("/");
            },
            src:
              "data:image/png;base64,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",
            alt: "Logo principal",
          });
        },
        B = function () {
          return Object(R.jsx)("header", {
            children: Object(R.jsx)("div", { children: Object(R.jsx)(I, {}) }),
          });
        },
        T = a(77),
        k = a(56),
        q = a(207),
        N = function (e) {
          var t = e.message,
            a = e.className,
            n = e.children;
          return Object(R.jsxs)("div", {
            className: a,
            children: [n, Object(R.jsx)("span", { children: t })],
          });
        },
        Y = function (e) {
          var t = e.name,
            a = Object(T.a)(e, ["name"]),
            c = Object(n.useRef)(null),
            r = Object(k.c)(t),
            s = r.fieldName,
            i = r.defaultValue,
            u = r.error,
            l = r.registerField,
            j = Object(n.useState)(!1),
            b = Object(d.a)(j, 2),
            O = (b[0], b[1]),
            h = Object(n.useState)(!1),
            m = Object(d.a)(h, 2),
            x = (m[0], m[1]),
            A = Object(n.useCallback)(function () {
              O(!0);
            }, []),
            g = Object(n.useCallback)(function () {
              var e;
              O(!1),
                (null === (e = c.current) || void 0 === e ? void 0 : e.value)
                  ? x(!0)
                  : x(!1);
            }, []);
          return (
            Object(n.useEffect)(
              function () {
                l({ name: s, ref: c.current, path: "value" });
              },
              [s, l]
            ),
            Object(R.jsxs)(R.Fragment, {
              children: [
                Object(R.jsx)(
                  "input",
                  Object(o.a)(
                    { onFocus: A, onBlur: g, defaultValue: i, ref: c },
                    a
                  )
                ),
                u &&
                  Object(R.jsx)(N, {
                    message: u,
                    children: Object(R.jsx)(q.a, {
                      color: "#f42121",
                      size: 20,
                    }),
                  }),
              ],
            })
          );
        },
        C = function (e) {
          return Object(R.jsx)(
            "span",
            Object(o.a)(Object(o.a)({}, e), {}, { className: "loader" })
          );
        },
        K = a.p + "static/media/landing-3.f299376a.png",
        P = a(22),
        G = a(44);
      !(function (e) {
        (e.CHANGE_SCREEN = "CHANGE_SCREEN"),
          (e.INSERT_TRANSACTION_DATA = "INSERT_TRANSACTION_DATA"),
          (e.INSERT_PLANS_DATA = "INSERT_PLANS_DATA");
      })(S || (S = {}));
      var L,
        Q = { current_screen: "VisaoGeral" },
        F = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Q,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case S.CHANGE_SCREEN:
              var a = t.payload;
              return Object(o.a)(Object(o.a)({}, e), {}, { current_screen: a });
            case S.INSERT_TRANSACTION_DATA:
              var n = t.payload;
              return Object(o.a)(
                Object(o.a)({}, e),
                {},
                { transactions_data: n }
              );
            case S.INSERT_PLANS_DATA:
              var c = t.payload;
              return Object(o.a)(Object(o.a)({}, e), {}, { plans_data: c });
            default:
              return e;
          }
        },
        U = (function () {
          var e = localStorage.getItem("@token_user"),
            t = localStorage.getItem("@user_name");
          if (!e || !t) return null;
          var a = e.split(" ")[1];
          return { login: v.a.decode(a).sub, token: e, name: t };
        })();
      !(function (e) {
        (e.SET_USER = "SET_USER"), (e.REMOVE_USER = "REMOVE_USER");
      })(L || (L = {}));
      var D = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : U,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case L.SET_USER:
              var a = t.payload;
              return a;
            case L.REMOVE_USER:
              var n = localStorage.getItem("@token_user");
              return (
                n &&
                  (localStorage.removeItem("@token_user"),
                  localStorage.removeItem("@user_name")),
                null
              );
            default:
              return e;
          }
        },
        y = Object(G.b)({ user: D, dashboard: F }),
        J = Object(G.c)(y),
        W = a(113),
        X = function () {
          var e = localStorage.getItem("@token_user"),
            t = localStorage.getItem("@user_name");
          if (t && e) {
            var a,
              n = e.split(" ")[1],
              c = v.a.decode(n);
            J.dispatch(
              ((a = { login: c.sub, name: t, token: e }),
              Object(W.action)(L.SET_USER, a))
            );
          } else J.dispatch(Object(W.action)(L.REMOVE_USER));
        },
        Z = function () {
          var e = Object(n.useState)(""),
            t = Object(d.a)(e, 2),
            a = t[0],
            c = t[1],
            r = Object(n.useState)(""),
            s = Object(d.a)(r, 2),
            o = s[0],
            u = s[1],
            l = Object(n.useState)(""),
            x = Object(d.a)(l, 2),
            g = x[0],
            v = x[1],
            f = Object(n.useState)(""),
            S = Object(d.a)(f, 2),
            I = S[0],
            T = S[1],
            k = Object(n.useState)(""),
            q = Object(d.a)(k, 2),
            N = q[0],
            G = (q[1], Object(n.useState)("")),
            L = Object(d.a)(G, 2),
            Q = L[0],
            F = L[1],
            U = Object(n.useState)(!1),
            D = Object(d.a)(U, 2),
            y = D[0],
            J = D[1],
            W = Object(i.g)(),
            Z = Object(n.useRef)(null),
            H = Object(n.useState)(!1),
            V = Object(d.a)(H, 2),
            w = (V[0], V[1]);
          Object(n.useEffect)(function () {}, [Q]),
            Object(n.useEffect)(function () {
              o.length > 3 && g && I && 11 === N.length && a ? w(!0) : w(!1);
            }, []);
          var z = Object(n.useCallback)(
              (function () {
                var e = Object(b.a)(
                  j.a.mark(function e(t) {
                    var n, c, r, s, i, u, l, b, d;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = {}),
                                Object.keys(t).forEach(function (e) {
                                  n[e] = t[e].trim();
                                }),
                                J(!0),
                                (e.prev = 3),
                                null === (c = Z.current) ||
                                  void 0 === c ||
                                  c.setErrors({}),
                                (r = m
                                  .a()
                                  .shape({
                                    cpf: m
                                      .b()
                                      .min(14, "Obrigat\xf3rio ter 11 digitos"),
                                    username: m
                                      .b()
                                      .required(
                                        "Nome de usu\xe1rio obrigat\xf3rio "
                                      ),
                                    name: m
                                      .b()
                                      .required("Nome completo obrigat\xf3rio"),
                                    password: m
                                      .b()
                                      .min(6, "No m\xednimo 6 digitos"),
                                    confirmPassword: m
                                      .b()
                                      .min(6, "No m\xednimo 6 digitos"),
                                  })),
                                (e.next = 8),
                                r.validate(n, { abortEarly: !1 })
                              );
                            case 8:
                              if (g === I) {
                                e.next = 10;
                                break;
                              }
                              return e.abrupt("return");
                            case 10:
                              return (
                                (e.next = 12),
                                A.post("/usuarios", {
                                  cpf: N,
                                  login: a,
                                  nome: o,
                                  senha: g,
                                })
                              );
                            case 12:
                              if (
                                ((s = e.sent),
                                200 !== (i = s.status) && 201 !== i)
                              ) {
                                e.next = 26;
                                break;
                              }
                              return (
                                (e.next = 17),
                                A.post("/login", { usuario: a, senha: g })
                              );
                            case 17:
                              (u = e.sent),
                                (l = u.data),
                                localStorage.setItem("@token_user", l.token),
                                localStorage.setItem(
                                  "@user_name",
                                  l.usuario.nome
                                ),
                                X(),
                                P.b.success("Usu\xe1rio registrado!"),
                                W.push("/dashboard"),
                                (e.next = 28);
                              break;
                            case 26:
                              P.b.error("Ocorreu algum erro!"),
                                W.push("/error");
                            case 28:
                              e.next = 35;
                              break;
                            case 30:
                              (e.prev = 30),
                                (e.t0 = e.catch(3)),
                                (d = E(e.t0)),
                                null === (b = Z.current) ||
                                  void 0 === b ||
                                  b.setErrors(d),
                                P.b.error("O formul\xe1rio est\xe1 incorreto!");
                            case 35:
                              return (e.prev = 35), J(!1), e.finish(35);
                            case 38:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 30, 35, 38]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [N, a, o, g, I, W]
            ),
            M = Object(n.useCallback)(
              function () {
                p() ? W.push("/dashboard") : W.push("/login");
              },
              [W]
            ),
            _ = Object(n.useCallback)(function (e) {
              F(
                (function (e) {
                  for (
                    var t = [], a = Math.ceil(e.length / 3), n = 0;
                    n < a;
                    n++
                  )
                    t.push(e.slice(3 * n, 3 * n + 3));
                  return ""
                    .concat(t.slice(0, 3).join("."))
                    .concat(
                      0 === t.slice(3).length
                        ? ""
                        : "-".concat(t.slice(3).join(""))
                    );
                })(
                  e.target.value
                    .split("")
                    .filter(function (e) {
                      return !isNaN(Number(e));
                    })
                    .join("")
                )
              );
            }, []);
          return Object(R.jsxs)(R.Fragment, {
            children: [
              Object(R.jsx)(B, {}),
              Object(R.jsx)("div", {
                children: Object(R.jsx)("div", {
                  children: Object(R.jsxs)("div", {
                    children: [
                      Object(R.jsxs)("div", {
                        children: [
                          Object(R.jsx)("div", {
                            children: Object(R.jsxs)("p", {
                              children: [
                                "Gama Bank \xe9 um projeto de nossos alunos.",
                                Object(R.jsx)("span", {
                                  children: " J\xe1 tem conta?",
                                }),
                              ],
                            }),
                          }),
                          Object(R.jsxs)("button", {
                            onClick: M,
                            children: ["Acessar ", Object(R.jsx)(O.a, {})],
                          }),
                        ],
                      }),
                      Object(R.jsx)("div", {
                        children: Object(R.jsxs)(h.a, {
                          ref: Z,
                          onSubmit: z,
                          children: [
                            Object(R.jsx)("h1", {
                              children:
                                " Pe\xe7a sua conta e cart\xe3o de cr\xe9dito do Gama Bank",
                            }),
                            Object(R.jsx)(Y, {
                              name: "cpf",
                              maxLength: 14,
                              value: Q,
                              onChange: _,
                              placeholder: "Digite seu CPF",
                            }),
                            Object(R.jsx)(Y, {
                              name: "username",
                              value: a,
                              onChange: function (e) {
                                return c(e.target.value);
                              },
                              placeholder: "Escolha um nome de usu\xe1rio",
                            }),
                            Object(R.jsx)(Y, {
                              name: "name",
                              value: o,
                              onChange: function (e) {
                                return u(e.target.value);
                              },
                              placeholder: "Nome completo",
                            }),
                            Object(R.jsx)(Y, {
                              name: "password",
                              value: g,
                              type: "password",
                              onChange: function (e) {
                                return v(e.target.value);
                              },
                              placeholder: "Digite sua senha",
                            }),
                            Object(R.jsx)(Y, {
                              name: "confirmPassword",
                              value: I,
                              type: "password",
                              onChange: function (e) {
                                return T(e.target.value);
                              },
                              placeholder: "Confirme sua senha",
                            }),
                            y
                              ? Object(R.jsx)(C, {})
                              : Object(R.jsxs)("button", {
                                  type: "submit",
                                  children: [
                                    "Continuar",
                                    Object(R.jsx)(O.a, {
                                      className: "ArrowRight",
                                    }),
                                  ],
                                }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              Object(R.jsx)("section", {
                children: Object(R.jsx)("div", {
                  children: Object(R.jsxs)("div", {
                    children: [
                      Object(R.jsxs)("div", {
                        children: [
                          Object(R.jsx)("span", {
                            children: "Conta digital do Gama Academy",
                          }),
                          Object(R.jsx)("p", {
                            children:
                              "Rende mais que a poupan\xe7a, sem taxa de manuten\xe7\xe3o nem tarifas escondidas.",
                          }),
                        ],
                      }),
                      Object(R.jsxs)("div", {
                        children: [
                          Object(R.jsx)("span", {
                            children: "Cart\xe3o de Cr\xe9dito",
                          }),
                          Object(R.jsx)("p", {
                            children:
                              "Rende mais que a poupan\xe7a, sem taxa de manuten\xe7\xe3o nem tarifas escondidas.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              Object(R.jsx)("section", {
                children: Object(R.jsx)("div", {
                  children: Object(R.jsxs)("div", {
                    children: [
                      Object(R.jsxs)("div", {
                        children: [
                          Object(R.jsx)("span", { children: "Zero anuidade" }),
                          Object(R.jsx)("p", {
                            children:
                              "Burocracia custa caro. Somos eficientes para voc\xea n\xe3o ter que pagar tarifas.",
                          }),
                        ],
                      }),
                      Object(R.jsx)("div", {
                        children: Object(R.jsx)("span", { children: "0,00" }),
                      }),
                    ],
                  }),
                }),
              }),
              Object(R.jsx)("section", {
                children: Object(R.jsx)("div", {
                  children: Object(R.jsx)("div", {
                    children: Object(R.jsxs)("div", {
                      children: [
                        Object(R.jsx)("span", {
                          children: "O fim da complexibilidade",
                        }),
                        Object(R.jsx)("p", {
                          children:
                            "Para quem sabe que tecnologia e design s\xe3o melhores do que ag\xeancias e papelada.",
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              Object(R.jsx)("div", {
                children: Object(R.jsx)("div", {
                  children: Object(R.jsxs)("div", {
                    children: [
                      Object(R.jsxs)("div", {
                        children: [
                          Object(R.jsx)("span", {
                            children:
                              "Simplifique a sua vida. Pe\xe7a seu convite.",
                          }),
                          Object(R.jsx)("p", {
                            children:
                              "GamaAcademy Bank Line S.A. - CNPJ 00.000.000/0000-00",
                          }),
                          Object(R.jsx)("p", {
                            children:
                              "Rua Fict\xedcia, 999 - 00000-000 - S\xe3o Paulo, SP",
                          }),
                          Object(R.jsx)("p", {
                            children:
                              "Este \xe9 um projeto de avalia\xe7\xe3o | GamaAcademy | Accenture | 2021",
                          }),
                        ],
                      }),
                      Object(R.jsx)("div", {
                        children: Object(R.jsx)("img", {
                          src: K,
                          alt: "Imagem de um celular",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        H = function (e) {
          var t = e.text,
            a = e.Icon,
            n = Object(T.a)(e, ["text", "Icon"]);
          return Object(R.jsxs)(
            "button",
            Object(o.a)(
              Object(o.a)({}, n),
              {},
              {
                children: [
                  Object(R.jsx)("span", { children: t }),
                  Object(R.jsx)(a, { size: 21, color: "#fff" }),
                ],
              }
            )
          );
        },
        V = function () {
          var e = Object(n.useState)(""),
            t = Object(d.a)(e, 2),
            a = t[0],
            c = t[1],
            r = Object(n.useState)(""),
            s = Object(d.a)(r, 2),
            o = s[0],
            l = s[1],
            x = Object(n.useState)(!1),
            g = Object(d.a)(x, 2),
            v = g[0],
            f = g[1],
            p = Object(i.g)(),
            S = Object(n.useRef)(null),
            I = Object(n.useCallback)(
              (function () {
                var e = Object(b.a)(
                  j.a.mark(function e(t) {
                    var n, c, r, s, i, u, l;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = {}),
                                Object.keys(t).forEach(function (e) {
                                  n[e] = t[e].trim();
                                }),
                                f(!0),
                                (e.prev = 3),
                                null === (c = S.current) ||
                                  void 0 === c ||
                                  c.setErrors({}),
                                (r = m
                                  .a()
                                  .shape({
                                    username: m
                                      .b()
                                      .required(
                                        "Nome de usu\xe1rio obrigat\xf3rio "
                                      ),
                                    password: m
                                      .b()
                                      .required("Senha obrigat\xf3ria"),
                                  })),
                                (e.next = 8),
                                r.validate(n, { abortEarly: !1 })
                              );
                            case 8:
                              return (
                                (e.next = 10),
                                A.post("/login", { usuario: a, senha: o })
                              );
                            case 10:
                              (s = e.sent),
                                (i = s.data),
                                localStorage.setItem("@token_user", i.token),
                                localStorage.setItem(
                                  "@user_name",
                                  i.usuario.nome
                                ),
                                X(),
                                P.b.success("Seja bem-vindo(a)"),
                                p.push("/Dashboard/index.tsx"),
                                (e.next = 28);
                              break;
                            case 19:
                              if (
                                ((e.prev = 19),
                                (e.t0 = e.catch(3)),
                                (l = E(e.t0)),
                                null === (u = S.current) ||
                                  void 0 === u ||
                                  u.setErrors(l),
                                !Object.keys(e.t0).includes("isAxiosError"))
                              ) {
                                e.next = 26;
                                break;
                              }
                              return (
                                P.b.error("Ocorreu algum erro!"),
                                e.abrupt("return")
                              );
                            case 26:
                              f(!1), P.b.error("Usuario ou senha incorretos!");
                            case 28:
                              return (e.prev = 28), f(!1), e.finish(28);
                            case 31:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 19, 28, 31]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [a, o, p]
            );
          return Object(R.jsxs)(R.Fragment, {
            children: [
              Object(R.jsx)(B, {}),
              Object(R.jsxs)(h.a, {
                ref: S,
                onSubmit: I,
                children: [
                  "Fa\xe7a o login",
                  Object(R.jsx)(Y, {
                    name: "username",
                    value: a,
                    onChange: function (e) {
                      return c(e.target.value);
                    },
                    placeholder: "Digite seu usu\xe1rio",
                    autoFocus: !0,
                  }),
                  Object(R.jsx)(Y, {
                    name: "password",
                    value: o,
                    onChange: function (e) {
                      return l(e.target.value);
                    },
                    placeholder: "Digite sua senha",
                    type: "password",
                  }),
                  v
                    ? Object(R.jsx)(C, {})
                    : Object(R.jsx)(H, {
                        type: "submit",
                        text: "Continuar",
                        Icon: O.a,
                        className: "form-button",
                      }),
                  Object(R.jsx)(u.b, {
                    to: "/recover",
                    children: "Esqueci minha senha",
                  }),
                  Object(R.jsx)(u.b, {
                    to: "/",
                    children: "Ainda n\xe3o sou cliente",
                  }),
                ],
              }),
            ],
          });
        },
        w = function (e) {
          return p()
            ? Object(R.jsx)(i.a, { to: "/dashboard" })
            : Object(R.jsx)(i.b, Object(o.a)({}, e));
        },
        z = function () {
          return Object(R.jsx)(u.a, {
            children: Object(R.jsxs)(i.d, {
              children: [
                Object(R.jsx)(i.b, { path: "/", exact: !0, component: Z }),
                Object(R.jsx)(w, { path: "/login", component: V }),
              ],
            }),
          });
        },
        M =
          (a(448),
          function () {
            return (
              Object(n.useEffect)(function () {
                f(), X();
              }, []),
              Object(R.jsxs)(R.Fragment, {
                children: [Object(R.jsx)(z, {}), Object(R.jsx)(P.a, {})],
              })
            );
          }),
        _ = a(209);
      s.a.render(
        Object(R.jsx)(_.a, {
          store: J,
          children: Object(R.jsx)(c.a.StrictMode, {
            children: Object(R.jsx)(M, {}),
          }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[449, 1, 2]],
]);
//# sourceMappingURL=main.8dc16313.chunk.js.map
