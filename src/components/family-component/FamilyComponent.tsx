import {simpsons} from "../../../array.ts";
import CharacterComponent from "../character-component/CharacterComponent.tsx";
import {ICharacter} from "../../models/ICharacter.ts";
import './FamilyComponent.css';

const FamilyComponent = () => {
    return (
       <>
           {
               simpsons.map((value:ICharacter, index: number) => {
                  return <CharacterComponent item={value} key={index}>
                   </CharacterComponent>
               })
           }
       </>

    )
}

export default FamilyComponent;
