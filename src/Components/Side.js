import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai'

const Side=()=>
{
    return(
        <div id="divMenu">    
        <ul>    
            <li><a>PlayStation 3&ensp;<AiFillCaretRight/></a>    
                <ul>    
                    <li><a href="#">Consoles</a></li>    
                    <li><a href="#">Controllers</a></li>    
                    <li><a href="#">Digital Games</a></li>    
                </ul>    
            </li>         
        </ul> 
        <ul>    
            <li><a>PlayStation 4&ensp;<AiFillCaretRight/></a>    
                <ul>    
                    <li><a href="#">Consoles</a></li>    
                    <li><a href="#">Controllers</a></li>    
                    <li><a href="#">Digital Games</a></li>    
                </ul>    
            </li>         
        </ul>  
        <ul>    
            <li><a>PlayStation 5&ensp;<AiFillCaretRight/></a>    
                <ul>    
                    <li><a href="#">Consoles</a></li>    
                    <li><a href="#">Controllers</a></li>    
                    <li><a href="#">Digital Games</a></li>    
                </ul>    
            </li>         
        </ul>    
        <ul>    
            <li><a>PC Games&ensp;&ensp;&ensp;<AiFillCaretRight/></a>    
                <ul>    
                    <li><a href="#">Consoles</a></li>    
                    <li><a href="#">Controllers</a></li>    
                    <li><a href="#">Digital Games</a></li>    
                </ul>    
            </li>         
        </ul>  
</div> 
    )
}
export default Side