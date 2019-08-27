import React from 'react'
import {Button, Container, Control, Field, Help, Input, Label, Section, Select} from "bloomer";

const LoginPage = () => {
    return (
        <Container style={{"margin-bottom": "246px"}}>
            <Section>
                <p style={{
                    "font-family": "Roboto",
                    "font-style": "normal",
                    "font-weight": "500",
                    "font-size": "48px",
                    "line-height": "56px",
                    "text-align": "center",
                    "letter-spacing": "0.25px",
                    "margin-top": "120px",

                    "color": "#000000"

                }}>Вход</p>
                <Container style={{"width": "370px", "margin-top": "45px"}}>
                    <Field>
                        <Label>Электронный адрес</Label>
                        <Control>
                            <Input type="text" placeholder='example@gmail.com'
                                   style={{"margin-top": "4px",
                                       "background": "#FFFFFF",
                                       "border": "1px solid #0019FF",
                                       "box-sizing": "border-box",
                                       "border-radius": "8px",
                                       "height": "48px"
                                   }}/>
                        </Control>
                    </Field>
                    <Field>
                        <Label style={{"margin-top": "10px"}}>Пароль</Label>
                        <Control>
                            <Input type="password"
                                   placeholder='password'
                                   style={{"margin-top": "4px",
                                       "background": "#FFFFFF",
                                       "border": "1px solid #0019FF",
                                       "box-sizing": "border-box",
                                       "border-radius": "8px",
                                       "height": "48px"
                                   }}/>
                        </Control>
                        <Help isPulled="right"
                              style={{
                                  "font-family": "Roboto",
                                  "font-style": "normal",
                                  "font-weight": "500",
                                  "font-size": "14px",
                                  "line-height": "16px",
                                  "letter-spacing": "0.25px",

                                  "color": "#0019FF"
                              }}>Забыли пароль?</Help>
                    </Field>
                    <Control isPulled="right">
                        <Button style={{
                            "background": "#001AFF",
                            "border-radius": "4px",
                            "height": "54px",
                            "width": "341px",
                            "font-family": "Roboto",
                            "font-style": "normal",
                            "font-weight": "500",
                            "font-size": "14px",
                            "line-height": "16px",
                            "letter-spacing": "0.25px",

                            "color": "#FFFFFF"
                        }}>Начать поиск!</Button>
                    </Control>
                </Container>
            </Section>
        </Container>
    );
};

export default LoginPage;