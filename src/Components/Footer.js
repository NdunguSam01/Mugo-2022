import React from 'react';
import {SocialIcon} from 'react-social-icons';
const Footer=()=>
{
    return(
        <div className="footer">
            <SocialIcon url='https://twitter.com'  title='Twitter Page' target="_blank" rel="noopener noreferrer"></SocialIcon>&ensp;
            <SocialIcon url='https://facebook.com'  title='Facebook Page' target="_blank" rel="noopener noreferrer"></SocialIcon>&ensp;
            <SocialIcon url='https://instagram.com' title='Instagram Page' target="_blank" rel="noopener noreferrer"></SocialIcon>&ensp;
            <SocialIcon url='mailto:ndungu.muigai01@gmail.com' title='Email address' target="_blank" rel="noopener noreferrer"></SocialIcon>&ensp;
            <SocialIcon url='https://web.whatsapp.com/send?phone=+254707251073' title='WhatsApp contact' target="_blank" rel="noopener noreferrer"></SocialIcon>
        </div>
    )
}
export default Footer