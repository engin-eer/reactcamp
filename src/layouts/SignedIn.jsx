import React from 'react'
import {  Dropdown,Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
             <Image avatar spaced="right" 
                src="https://fotolifeakademi.com/uploads/2020/04/sabit-odakli-objelerden-yararlanin.jpg"/>
                <Dropdown pointing="top left" text="Engin">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
                </Menu.Item>
        </div>
    )
}
