import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Row, Col, ListGroup, ListGroupItem, Input, Badge } from 'reactstrap';
import './contact_list.css';

export default function ContactList(props) {
    ContactList.propTypes = {
        contactsData: PropTypes.arrayOf(PropTypes.string).isRequired,
        handleSave: PropTypes.func.isRequired,
        handleDelete: PropTypes.func.isRequired,
    }

    const [itemId, setItemId] = useState(null);
    const [isEditedId, setIsEditedId] = useState(null);

    useEffect(() => {
        if (isEditedId != null) {
            document.getElementById("editName-" + isEditedId).focus();
        }
    }, [isEditedId])

    function listGroupItemsOnClickHandler(e) {
        setItemId(e.target.id.split("-")[1]);
    }

    function editBadgeOnClickHandler(e) {
        e.stopPropagation();
        const isEditedIndex = e.target.parentNode.id.split("-")[1];
        setIsEditedId(isEditedIndex);
        setItemId(isEditedIndex);
    }
    function saveBadgeOnClickHandler(e) {
        e.stopPropagation();
        let newContacts = [...props.contactsData];
        newContacts[isEditedId] = document.getElementById("editName-" + isEditedId).value;
        props.handleSave([...newContacts]);        
        setIsEditedId(null);
    }

    function deleteBadgeOnClickHandler(e) {
        e.stopPropagation();

        if (e.target.parentNode.id.split("-")[1] == props.contactsData.length - 1 && e.target.parentNode.id.split("-")[1] == itemId) {
            setItemId(null);
        }
        props.handleDelete(e.target.parentNode.id.split("-")[1])
    }

    const listGroupItems = props.contactsData.map((element, index) =>
        <ListGroupItem
            id={'listGroupItem-' + index}
            key={index}
            active={itemId == index ? true : false}
            action
            onClick={listGroupItemsOnClickHandler}
        >
            <Row id={'row-' + index} className="justify-content-between align-items-center">
                <Col id={'col1-' + index}>
                    {isEditedId == index ?
                        <>
                            <Input
                                id={'editName-' + index}
                                defaultValue={element}
                            />
                        </>
                        :
                        element
                    }
                </Col>
                <Col
                    id={'col2-' + index}
                    className="horizontalAlignCenter"
                    xs="5"
                    sm="5"
                    md="4"
                    lg="3"
                    xl="3"
                >
                    {isEditedId == index ?
                        <Badge
                            pill
                            color="warning"
                            className="mr-1 ml-1 cursorPointer"
                            onClick={saveBadgeOnClickHandler}
                        >
                            Save
                        </Badge>
                        :
                        <Badge
                            pill
                            color="success"
                            className="mr-1 ml-1 cursorPointer"
                            onClick={editBadgeOnClickHandler}
                        >
                            Edit
                        </Badge>
                    }
                    <Badge
                        pill
                        color="danger"
                        className="cursorPointer"
                        onClick={deleteBadgeOnClickHandler}
                    >
                        Delete
                    </Badge>
                </Col>
            </Row>
        </ListGroupItem>
    );

    return (
        <ListGroup className="mt-3 mb-3 maxHeightOverflow">
            {listGroupItems}
        </ListGroup>
    )
}