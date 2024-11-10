import { useState } from 'react';
import React from "react";

const categories = ["campus", "downtown", "eastside", "alps", "epps"];

export default function Searchbox (){

    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCheckboxChange = (category) => {
        setSelectedCategories((prev) =>
          prev.includes(category)
            ? prev.filter((c) => c !== category)
            : [...prev, category]
        );
      };

    return(
    <div>
        <div>Location</div>
        <table id="content_cbl_difficulty">
            <tbody><tr>
                {categories.map((category) => (
                    <td><input id="location_campus_search" type="checkbox"  checked={selectedCategories.includes(category)} onChange={() => handleCheckboxChange(category)} value="1" /><label>{category}</label></td>
                ))}
                </tr>
            </tbody>
        </table>
    </div>
    );
}



// import { ReactNode } from 'react';
// import './Card.css';

// interface CardProps {
//     className?: string; // Optional additional CSS classes
//     children: ReactNode; // Content inside the card
//   }

// const Card: React.FC<CardProps> = ({ className = '', children }) => {
//   const classes = `card ${className}`; // Combine card class with additional classes

//   return <div className={classes}>{children}</div>;
// };
// export default Card;



/*{ <div class="search-option-section">
    <div class="search-option-header">Difficulty</div>
    <table id="content_cbl_difficulty" class="search-option-options search-options-difficulty">
        <tbody><tr>
                <td><input id="content_cbl_difficulty_0" type="checkbox" name="ctl00$content$cbl_difficulty$0" onclick="javascript:setTimeout('__doPostBack(\'ctl00$content$cbl_difficulty$0\',\'\')', 0)" value="1"><label for="content_cbl_difficulty_0">0-5</label></td>
            </tr><tr>
                <td><input id="content_cbl_difficulty_1" type="checkbox" name="ctl00$content$cbl_difficulty$1" onclick="javascript:setTimeout('__doPostBack(\'ctl00$content$cbl_difficulty$1\',\'\')', 0)" value="2"><label for="content_cbl_difficulty_1">5-10</label></td>
            </tr><tr>
                <td><input id="content_cbl_difficulty_2" type="checkbox" name="ctl00$content$cbl_difficulty$2" onclick="javascript:setTimeout('__doPostBack(\'ctl00$content$cbl_difficulty$2\',\'\')', 0)" value="3"><label for="content_cbl_difficulty_2">10-15</label></td>
            </tr><tr>
                <td><input id="content_cbl_difficulty_3" type="checkbox" name="ctl00$content$cbl_difficulty$3" onclick="javascript:setTimeout('__doPostBack(\'ctl00$content$cbl_difficulty$3\',\'\')', 0)" value="4"><label for="content_cbl_difficulty_3">15-20</label></td>
            </tr><tr>
                <td><input id="content_cbl_difficulty_4" type="checkbox" name="ctl00$content$cbl_difficulty$4" onclick="javascript:setTimeout('__doPostBack(\'ctl00$content$cbl_difficulty$4\',\'\')', 0)" value="5"><label for="content_cbl_difficulty_4">20+</label></td>
            </tr>
        </tbody>
    </table>
</div> }*/

