import React, {Component} from "react";
import "./register-form.css";
import {Control, Field, Input, Label, Select} from "bloomer";
import {COUNTRIES} from "../../utils";

export default class RegisterForm extends Component {

    render() {
        const { page } = this.props;

        if (page === 3) {
            return (
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
                </form>
            )
        }

        if (page === 2) {
            return (
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
                                {COUNTRIES.map(country => <option value={country}>{country}</option>)}
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
                </form>
            )
        }

        return (
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
            </form>
        )
    }
}