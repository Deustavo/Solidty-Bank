import styled from 'styled-components';



export const Container = styled.div`

body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #5E60CE;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 6px 6px 32px;
  text-decoration: none;
  font-size: 17px;
  color: white;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

img{
  margin-left: 70px;
  margin-top: 20px;
}

p {
  margin-left: 59px;
  font-size: 18px;
  color: white;
}

.main {
  margin-left: 200px; /* Same as the width of the sidenav */
}

.nav {
    display: grid;
    flex-wrap: wrap;
    padding-left: 13px;
    margin-bottom: 0;
    list-style: none;
}

.sidenav a:hover {
  width:95%;
  background: white;
}
.sidenav a:hover {
  color: #474898;
}

.imgbtn{
  width: 15px;
    float: left;
    margin-left: 10px;
    margin-top: 13px;
}

.sair{
    width: 100px;
    height: 30px;
    font-size: 15px;
    border-radius: 100px;
    background-color: white;;
}

button{
  color:#2366B5;
  margin-left: 12px;
  margin-top: 20px;

}

.btnimg{
  width: 15px;
  float: left;
  margin-left: 12px;
  margin-top: 5px;
}

.perfil{
  margin-top: 30px;
}

.bank{
  margin-top: -26px;
  margin-left: 69px;
  font-size: 17px;
  font-weight: 100;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

.table {
    margin-left: 21%;
    width: 50%;
    margin-bottom: 1rem;
    color: #212529;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: #CCCCCC;
}

.titulo{
  background-color: #474898;
  color:white;
}

h1{
  margin-left: 21%;
  color:#5E60CE;
}

`
