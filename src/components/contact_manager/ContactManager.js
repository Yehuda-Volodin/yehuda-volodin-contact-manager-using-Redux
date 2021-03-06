import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap';
import axios from "axios";
import './contact_manager.css';

import SelectFile from '../select_file/SelectFile';
import MainHeader from '../main_header/MainHeader';
import AddContact from '../add_contact/AddContact';
import ContactList from '../contact_list/ContactList';

import defaultBg from './default_bg.jpg';
import selectBg from './select_bg.png';

export default function ContactManager(props) {
    const [backgroundFile, setBackgroundFile] = useState(defaultBg);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/Yehuda-Volodin/fake-server/contacts_list'
        ).then(res => {
            props.dispatchUpdateContacts([...res.data]);
        }).catch((err) => {
            alert(err);
        });
    }, []);

    function selectBackgroundFileInputHandler(e) {
        const newBackgroundFile = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (function () { return function (e) { setBackgroundFile(e.target.result); }; })();
        reader.readAsDataURL(newBackgroundFile);
    }

    return (
        <Container
            className="contactManager fontSize"
            style={{ "backgroundImage": `url(${backgroundFile})` }}
        >
            <SelectFile
                id="selectBackgroundFile"
                fileTypes=".jpg, .jpeg, .png"
                labelInnerJSX={
                    <img
                        src={selectBg}
                        alt="Bg."
                        width="40"
                        height="40"
                    />
                }
                labelStyle={{
                    "position": "fixed",
                    "right": "2%",
                    "color": "#ffc107",
                    "border": "thin solid #ffc107"
                }}
                onInput={selectBackgroundFileInputHandler}
            />
            <MainHeader
                headerText="Contact Manager"
                headerStyle={{ "fontFamily": "fantasy" }}
            />
            <AddContact handleSubmit={props.dispatchAddContact} />
            <ContactList
                contactsData={props.contacts}
                handleDelete={props.dispatchDeleteContact}
                handleSave={props.dispatchUpdateContacts}
            />
        </Container>
    );
}
