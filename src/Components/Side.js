import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Side=()=>
{
    return(
        <div id="divMenu">    
        <ul>    
            <li><Link>PlayStation 3&ensp;<AiFillCaretRight/></Link>    
                <ul>    
                    <li><Link to="../PS3/Consoles">Consoles</Link></li>    
                    <li><Link to="../PS3/Controllers">Controllers</Link></li>    
                    <li><Link to="../PS3/Games">Digital Games</Link></li>    
                </ul>    
            </li>         
        </ul> 
        <ul>    
            <li><Link>PlayStation 4&ensp;<AiFillCaretRight/></Link>    
                <ul>    
                    <li><Link to="../PS4/Consoles">Consoles</Link></li>    
                    <li><Link to="../PS4/Consoles">Controllers</Link></li>    
                    <li><Link to="../PS4/Consoles">Games</Link></li>    
                </ul>    
            </li>         
        </ul>  
        <ul>    
            <li><Link>PlayStation 5&ensp;<AiFillCaretRight/></Link>    
                <ul>    
                    <li><Link to="../PS5/Consoles">Consoles</Link></li>    
                    <li><Link to="../PS5/Consoles">Controllers</Link></li>    
                    <li><Link to="../PS5/Consoles">Games</Link></li>  
                </ul>    
            </li>         
        </ul>    
        <ul>    
            <li><Link>PC Games&ensp;&ensp;&ensp;<AiFillCaretRight/></Link>    
                <ul>    
                    <li><Link to="../PC/Games">Games</Link></li>   
                </ul>    
            </li>         
        </ul>  
</div> 
    )
}
export default Side