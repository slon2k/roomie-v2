import React from 'react';

import {
    Radio,
    Help,
    Container,
    Input,
    Label,
    Control,
    Field,
    Icon,
    Button,
    Checkbox,
    Select,
    TextArea,
    Section
} from "bloomer";

const RegisterPage = () => {
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

                }}>Регистрация</p>
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
                    </Field>
                    <Field>
                        <Label style={{"margin-top": "10px"}}>Повторите пароль</Label>
                        <Control>
                            <Input type="password" placeholder='password' style={{"margin-top": "4px",
                                "background": "#FFFFFF",
                                "border": "1px solid #0019FF",
                                "box-sizing": "border-box",
                                "border-radius": "8px",
                                "height": "48px"
                            }}/>
                        </Control>
                    </Field>
                    <Control isPulled="right">
                        <Button style={{
                            "background": "#001AFF",
                            "border-radius": "4px",
                            "height": "54px",
                            "width": "168px",
                            "font-family": "Roboto",
                            "font-style": "normal",
                            "font-weight": "500",
                            "font-size": "14px",
                            "line-height": "16px",
                            "letter-spacing": "0.25px",

                            "color": "#FFFFFF"
                        }}>Дальше</Button>
                    </Control>
                </Container>
            </Section>
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

                }}>Завершение регистрации</p>
                <Container style={{"width": "370px", "margin-top": "45px"}}>
                    <Field>
                        <Label>ФИО</Label>
                        <Control>
                            <Input type="text" placeholder='Коробейникова Екатерина Борисовна'
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
                        <Label>Пол</Label>
                        <Control>
                            <Select style={{"margin-top": "4px",
                                "background": "#FFFFFF",
                                "border": "1px solid #0019FF",
                                "box-sizing": "border-box",
                                "border-radius": "8px",
                                "height": "48px",
                                "width": "370px"
                            }}>
                                <option>Женский</option>
                                <option>Мужской</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label style={{"margin-top": "10px"}}>Родная страна</Label>
                        <Control>
                            <Select style={{"margin-top": "4px",
                                "background": "#FFFFFF",
                                "border": "1px solid #0019FF",
                                "box-sizing": "border-box",
                                "border-radius": "8px",
                                "height": "48px",
                                "width": "370px"
                            }}>
                                <option>Не выбрано</option>
                                <option>Казахстан</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label style={{"margin-top": "10px"}}>Родной город</Label>
                        <Control>
                            <Select style={{"margin-top": "4px",
                                "background": "#FFFFFF",
                                "border": "1px solid #C2C2C2",
                                "box-sizing": "border-box",
                                "border-radius": "8px",
                                "height": "48px",
                                "width": "370px"
                            }}>
                                <option>Не выбрано</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label style={{"margin-top": "10px"}}>Университет или колледж</Label>
                        <Control>
                            <Select style={{"margin-top": "4px",
                                "background": "#FFFFFF",
                                "border": "1px solid #C2C2C2",
                                "box-sizing": "border-box",
                                "border-radius": "8px",
                                "height": "48px",
                                "width": "370px"
                            }}>
                                <option>Не выбрано</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label style={{"margin-top": "10px"}}>Специальность</Label>
                        <Control>
                            <Select style={{"margin-top": "4px",
                                "background": "#FFFFFF",
                                "border": "1px solid #C2C2C2",
                                "box-sizing": "border-box",
                                "border-radius": "8px",
                                "height": "48px",
                                "width": "370px"
                            }}>
                                <option>Не выбрано</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label style={{"margin-top": "10px"}}>Контактный телефон</Label>
                        <Control>
                            <Input type="tel" placeholder='+77059116279' style={{"margin-top": "4px",
                                "background": "#FFFFFF",
                                "border": "1px solid #C2C2C2",
                                "box-sizing": "border-box",
                                "border-radius": "8px",
                                "height": "48px",
                                "width": "370px"
                            }}/>
                        </Control>
                    </Field>
                    <Control isPulled="right">
                        <Button style={{
                            "background": "#001AFF",
                            "border-radius": "4px",
                            "height": "54px",
                            "width": "168px",
                            "font-family": "Roboto",
                            "font-style": "normal",
                            "font-weight": "500",
                            "font-size": "14px",
                            "line-height": "16px",
                            "letter-spacing": "0.25px",

                            "color": "#FFFFFF"
                        }}>Дальше</Button>
                    </Control>
                </Container>
            </Section>
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

                }}>Ещё немного вопросов :)</p>
                <Container style={{"width": "370px", "margin-top": "45px"}}>
                    <Field>
                        <Label>В каком городе вы ищете жилье?</Label>
                        <Control>
                            <Select style={{"margin-top": "4px",
                                "background": "#FFFFFF",
                                "border": "1px solid #0019FF",
                                "box-sizing": "border-box",
                                "border-radius": "8px",
                                "height": "48px",
                                "width": "370px"
                            }}>
                                <option>Женский</option>
                                <option>Мужской</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label>Максимально число сожителей</Label>
                        <Control>
                            <Input type="text"
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
                        <Label>Период аренды</Label>
                        <Control>
                            <Select style={{"margin-top": "4px",
                                "background": "#FFFFFF",
                                "border": "1px solid #0019FF",
                                "box-sizing": "border-box",
                                "border-radius": "8px",
                                "height": "48px",
                                "width": "370px"
                            }}>
                                <option>Не выбрано</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label style={{"margin-top": "10px"}}>Языки</Label>
                        <Control>
                            <Select style={{"margin-top": "4px",
                                "background": "#FFFFFF",
                                "border": "1px solid #0019FF",
                                "box-sizing": "border-box",
                                "border-radius": "8px",
                                "height": "48px",
                                "width": "370px"
                            }}>
                                <option>Не выбрано</option>
                                <option>Казахстан</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label style={{"margin-top": "10px"}}>Есть ли животные</Label>
                        <Control>
                            <Select style={{"margin-top": "4px",
                                "background": "#FFFFFF",
                                "border": "1px solid #C2C2C2",
                                "box-sizing": "border-box",
                                "border-radius": "8px",
                                "height": "48px",
                                "width": "370px"
                            }}>
                                <option>Не выбрано</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label style={{"margin-top": "10px"}}>Есть ли вредные привычки</Label>
                        <Control>
                            <Select style={{"margin-top": "4px",
                                "background": "#FFFFFF",
                                "border": "1px solid #C2C2C2",
                                "box-sizing": "border-box",
                                "border-radius": "8px",
                                "height": "48px",
                                "width": "370px"
                            }}>
                                <option>Не выбрано</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label style={{"margin-top": "10px"}}>Дополнительная информация</Label>
                        <Control>
                            <Input type="text" placeholder='Любая информация, о которой считаете необходимым сообщить' style={{"margin-top": "4px",
                                "background": "#FFFFFF",
                                "border": "1px solid #C2C2C2",
                                "box-sizing": "border-box",
                                "border-radius": "8px",
                                "height": "98px",
                                "width": "370px"
                            }}/>
                        </Control>
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
                        }}>Готово!</Button>
                    </Control>
                </Container>
            </Section>
        </Container>
    );
};

export default RegisterPage;