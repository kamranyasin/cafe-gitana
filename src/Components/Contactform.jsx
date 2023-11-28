import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import axiosInstance from "../axios-Instance";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            // width: 100,
        },
    },
}));

export default function ValidationTextFields() {
    const {t, i18n} = useTranslation();
    const classes = useStyles();
    const [values, setvalues] = useState({
        name: "",
        surName: "",
        phoneNumber: "",
        emailAddress: "",
        comment: "",
    });
    const handleChange = (e) => {
        setvalues({...values, [e.target.name]: [e.target.value]});
        console.log(e.target.value);
        console.log(values.emailAddress);
    };
    const hanleSubmit = (e) => {
        e.preventDefault();
        var contact = {
            name: values.name,
            surName: values.surName,
            phoneNumber: values.phoneNumber,
            emailAddress: values.emailAddress,
            comment: values.comment,
        };
    };

    const submitQuery = async () => {

        let res = await axiosInstance.post('/contactus/submit_query',
            {

                name: `${values.name}`,
                surname: `${values.surName}`,
                phone_number: `${values.phoneNumber}`,
                email_address: `${values.emailAddress}`,
                comment: `${values.comment}`

            })
            .then((res) => {
                alert("Email sent!");
            })

    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <div className="row">
                    <div className="col-4 contact-name-center">
                        <h5 className="contact-h5">{t("Menu.1")}</h5>
                    </div>
                    <div className="col-8  text-center">
                        <TextField
                            id="name"
                            name="name"
                            value={values.name}
                            variant="outlined"
                            className="text-field" //assign the width as your requirement
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 contact-name-center">
                        <h5 className="contact-h5">{t("Menu.2")}</h5>
                    </div>
                    <div className="col-8 text-center">
                        <TextField
                            id="outlined-basic"
                            name="surName"
                            value={values.surName}
                            variant="outlined"
                            className="text-field" //assign the width as your requirement
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 contact-name-center">
                        <h5 className="contact-h5">{t("Menu.3")}:</h5>
                    </div>
                    <div className="col-8 text-center">
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            type="Number"
                            name="phoneNumber"
                            value={values.phoneNumber}
                            className="text-field" //assign the width as your requirement
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 contact-name-center">
                        <h5 className="contact-h5">{t("Menu.4")}</h5>
                    </div>
                    <div className="col-8 ">
                        <TextField
                            variant="outlined"
                            type="email"
                            id="email"
                            name="emailAddress"
                            color="secondary"
                            value={values.emailAddress}
                            variant="outlined"
                            className="text-field" //assign the width as your requirement
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 contact-name-center">
                        <h5 className="contact-h5">Commemt:</h5>
                    </div>
                    <div className="col-8 text-center">
                        <TextareaAutosize
                            aria-label="minimum height"
                            rowsMin={5}
                            name="comment"
                            value={values.comment}
                            rowsMax={4}
                            className="text-area"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
            </form>
            <div className="row  submit-btn-row">
                <button className="submit-btn" onClick={submitQuery}>Submit</button>
                {/*<Link to="/home">*/}
                {/*  <div className="submit-btn">Submit</div>*/}
                {/*</Link>*/}
            </div>
        </div>



    );
}
