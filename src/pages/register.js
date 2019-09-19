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
    Section, Title
} from "bloomer";

import { COUNTRIES } from "../utils";

const RegisterPage = () => {
    return (
        <Container>
            <Section style={{"margin-top": "50px"}}>
                <Title isSize={2} hasTextAlign="centered">Регистрация</Title>
            </Section>
            <Section style={{"max-width": "500px", "margin": "0 auto"}}>
                <form>
                    <Field>
                        <Label isSize="medium">Электронная почта</Label>
                        <Control>
                            <Input type="email" placeholder='example@gmail.com' isSize="medium"/>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Пароль</Label>
                        <Control>
                            <Input type="password" isSize="medium" placeholder='password'/>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Повторите пароль</Label>
                        <Control>
                            <Input type="password" isSize="medium" placeholder='password'/>
                        </Control>
                    </Field>
                    <Button isColor='primary' isSize="medium" style={{"margin-top": "10px"}}>Дальше</Button>
                </form>
            </Section>
            <Section>
                <Title isSize={2} hasTextAlign="centered">Завершение регистрации</Title>
            </Section>
            <Section style={{"max-width": "500px", "margin": "0 auto"}}>
                <form>
                    <Field>
                        <Label isSize="medium">ФИО</Label>
                        <Control>
                            <Input type="text" placeholder='Александр Сергеевич Пушкин' isSize="medium"/>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Пол</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                <option>Женский</option>
                                <option>Мужской</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Родная страна</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                { COUNTRIES.map(country => <option value={country}>{country}</option>) }
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Пароль</Label>
                        <Control>
                            <Input type="password" isSize="medium" placeholder='password'/>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Повторите пароль</Label>
                        <Control>
                            <Input type="password" isSize="medium" placeholder='password'/>
                        </Control>
                    </Field>
                    <Button isColor='primary' isSize="medium" style={{"margin-top": "10px"}}>Дальше</Button>
                </form>
            </Section>



        </Container>
    );
};

export default RegisterPage;