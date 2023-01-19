import React from "react";

function App(){
    return<Section1 {...section1Data} />;
}

export default App;

function Section1(props) {
    const {
        overlapGroup3,
        logo1,
        logoahm2,
        digitalizationAssemblyFramePlant6,
        donthaveAnAccount,
        enterYourEmailAndPasswordBelow,
        login,
        forgotPassword,
        dashboard,
        buttonTextButtonPrimaryDefaultProps,
        buttonContainedPrimaryDefaultProps,
        textfieldlabelTextfieldDefaultProps,
        textfieldLabelIconDefaultProps,
} = props;

return (
    <div className="container-center-horizontal">
      <div className="section-1 screen">
        <div className="login-admin">
          <div className="overlap-group3" style={{
backgroundImage: 'url(${overlapGroup3})' }}>
            <div className="logo-container">
            <img className="logo-1" src={logo1} alt="Logo 1" />
            <img className="logoahm-2" src={logoahm2}
alt="logoahm 2" />
            </div>
            <h1 className="digitalization-assembly-frame-plant-6">
            {digitalizationAssemblyFramePlant6}
            </h1>
          </div>
          <div className="log-in">
             <div className="overlap-group2">
               <CardsDefault />
              <div className="account">
                 <div className="dont-have-an-account">
                    {dontHaveAnAccount}
                 </div>
                 <ButtonTextButtonPrimaryDefault>
                   {buttonTextButtonPrimaryDefaultProps.children}
                 </ButtonTextButtonPrimaryDefault>
              </div>
              <ButtonContainedPrimaryDefault>
                {buttonContainedPrimaryDefaultProps.children}
              </ButtonContainedPrimaryDefault>
              <TextFieldLabelTextfieldDefault
                label={textfieldLabelTextfieldDefaultProps.label}
                textfield=
{textfieldLabelTextfieldDefaultProps.textfield}
            />
            <TextfieldLabelIconDefault
             label={textfieldLabelIconDefaultProps.label}
             textfield=
{textfieldLabelIconDefaultprops.textfield}
            />
            <p className="enter-your-email-and-password-below">
              {enterYourEmailAndPasswordBelow}
            </p>
            <div className="login">
              {login}
            </div>
            <div className="forgot-password">
              {forgotPassword}
            </div>
            <div className="group-64"></div>
          </div>
        </div>
     </div>
     <img className="dashboard" src={dashboard}
alt="Dashboard" />
   </div>
  </div>
);
}

function CardsDefault() {
    return <div className="card-default"></div>;
}

function ButtonTextButtonPrimaryDefault(props) {
    const { children } = props;

    return (
        <div className="button-text-button-primary-default">
          <div className="btn-label">
          {children}
        </div>
      </div>
    );
}

function TextfieldLabelTextfielddefault(props) {
    const { label, textfield } = props;

    return (
        <div className="textfield-label-textfield-default">
          <div className="label mulish-bold-mine-shaft-12px">
             {label}
          </div>
          <div className="overlap-group">
            <div className="textfield mulish-normal-fiord-14px">
              {textfield}
            </div>
          </div>
        </div>
    );
}

function TextfieldLabelIconDefault(props){
    const { label, textfield } = props;

    return (
        <div className="textfield-label-icon-default">
          <div className="label-1 mulish-bold-mine-shaft-12pd">
            {label}
          </div>
          <div className="overlap-group1">
            <div className="textfield-1 mulish-normal-fiord-14px">
              {textfield}
            </div>
            <img className="icon-hide-active" src="icon-hide-active-1.svg" alt="icon / hide / active" />
            </div>
           </div>
    );
}

const buttonTextButtonPrimaryDefaultData = {
    children: "Sign Up",
};

const buttonContainedPrimaryDefaultData = {
    children: "Log in",
}

const textfieldLabelTextfieldDafaultData = {
    label: "EMAIL",
    textfield: "Email address",
};

const textfieldLabelIconDefaultData = {
    label: "PASSWORD",
    textfield: "Password",
};

const section1Data = {
    overlapGroup3: "rectangle-9.png",
    logo1: "logo-1.png",
    logoahm2: "logoahm-2.png",
    digitalizationAssemblyFramePlant6: (
        <React.Fragment>
          Digitalization <br />
           Assembly Frame Plant 6

        </React.Fragment>
    ),
    dontHaveAnAccount: "Don't have an account?",
    enterYourEmailAndPasswordBellow: "Enter your email and password below",
    login: "Login",
    forgotPassword: "Forgot password?",
    dashboard: "dashboard.jpg",
    buttonTextButtonPrimaryDefaultProps:
  buttonTextButtonPrimaryDefaultData,
   buttonContainedPrimaryDefaultProps:
  buttonContainedPrimaryDefaultData,
   textfieldLabelTextfieldDefaultProps:
  textfieldLabelTextfieldDefaultData,
   textfieldLabelTextfieldDafaultProps:
  textfieldLabelTextfieldDafaultData,
};