Descripcion del endpoint User

ruta
<ul>
    <li>/user/register</li>
    <li>/user/login</li>
    <li>/user/update/:id</li>
    <li>/user/delete/:id</li>
    <li>/user/allusers</li>
</ul>

/user/register
<P>
    Para poder registrar un usuario en la base de datos debemos ingresar un campo "usernameAdmin" que cuente con el role de administrador en la base de datos para poder registrar el o  los usuarios en la aplicación
</P>

/user/login
<P>
    Para poder que un usuario se loguee en la aplicacion, debe tener credenciales validadas en la base de datos para hacer todas las autenticaciones correspondientes
</P>

/user/update/:id
<P>
    Al momento de realizar una modificacion de usuario en la base de datos debemos pasar un campo "usernameAdmin" para que la aplicacion nos de acceso a las modificacion de los datos de dicho usuario
</P>

/user/delete/:id
<p>
    Debe tener role de admin el usuario "usernameAdmin" que intente eliminar a otro usuario de la aplicacion, de lo contrario la peticion sera declinada por el servidor
</p>

/user/allusers
<p>
    Trae a todos los usuarios de la base de datos
</p>
