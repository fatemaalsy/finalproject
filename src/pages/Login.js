import LoginIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

const Login = () => {
    const clientID = '9ec83db8a7a24c1c9fc6afa1ea73913e';
    const redirectURI = '';
    const scope = 'playlist-modify-private';
    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientID);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirectURI);

    return (
        <>
            <a href={url}><Button size="large" variant="contained" color="primary" startIcon={<LoginIcon />}> LOGIN </Button></a>
        </>
    );
};

export default Login;