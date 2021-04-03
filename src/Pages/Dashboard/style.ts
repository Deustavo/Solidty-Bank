import styled from "styled-components";

export const Container = styled.div`
  body {
    font-family: "Lato", sans-serif;
  }

  .sidenav {
    height: 100%;
    width: 212px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #5E60CE;
    //overflow-x: hidden;
    padding-top: 20px;
  }

  .sidenav a {
    padding: 12px 0px 12px 44px;
    text-decoration: none;
    font-size: 17px;
    color: white;
    display: block;
    transition: all ease 300ms;
    cursor: pointer;
  }

  .nav {
    display: grid;
    flex-wrap: wrap;
    margin-bottom: 0;
    list-style: none;
  }

  .sidenav a:hover {
    background: white;
    color: #474898;
  }

  .logo {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #fff;
    font-size: 18px;
  }

  .imgbtn {
    width: 16px;
    float: left;
    margin-left: 16px;
    margin-top: 14px;
  }

  .sair {
    width: 100px;
    height: 30px;
    font-size: 15px;
    border-radius: 100px;
    background-color: white;
    border-color: white;
    font-weight: 600;
  }

  button {
    color: #2366b5;
    margin-left: 12px;
    margin-bottom: 40px;
    margin-top: 35px;
  }

  .btnimg {
    width: 15px;
    float: left;
    margin-left: 12px;
    margin-top: 1px;
  }

  .perfil {
    margin-top: 30px;
  }

  .selected {
    background-color: #fff;
    color: var(--primary-color) !important;
  }

  .mobilenav {
    display: none;
  }
  @media only screen and (max-width: 1024px) {
    .mobilenav {
      background-color: var(--primary-color);
      position: fixed;
      width: calc(100% - 20%);
      padding: 12px 10%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .mobilenav .logo {
      flex-direction: row;
    }
    .mobilenav .logo .name {
      margin-left: 12px;
    }
  }
`;
