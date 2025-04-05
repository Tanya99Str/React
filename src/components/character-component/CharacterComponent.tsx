import {ReactNode} from "react";
import {ICharacter} from "../../models/ICharacter.ts";
import './CharacterComponent.css';

type PropsCharacterType = {
    item: ICharacter;
    children?: ReactNode;
}

const CharacterComponent  = ({item, children}: PropsCharacterType) => {
    return (
     <div className="character-block">
         <h2>{item?.name} {item?.surname}</h2>
         <p>{children}</p>
     </div>

    )
}

export default CharacterComponent;
