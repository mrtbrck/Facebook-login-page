import './App.css';
import FaceBookLoginPage from "./components/FaceBookLoginPage";
import Info from "./components/Info";
import {Container, Grid} from "@mui/material";

function App() {
    return (
        <div className="App">

            <Grid container spacing={0} columns={16}>
                <Grid item xs={8}>
                    <Info/>
                </Grid>

                <Grid item xs={8}>
                    <FaceBookLoginPage/>
                </Grid>
            </Grid>


        </div>
    );
}

export default App;
