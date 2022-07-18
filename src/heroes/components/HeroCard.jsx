import { Link } from "react-router-dom";

// const CharacterByHero = ({alter_ego, characters}) => {
//     if ( alter_ego === characters ) return (<></>);
//     return <p>{characters}</p>
// }


export const HeroCard = ( {id, superhero, alter_ego, first_appearance, characters}) => {
    
    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    const characterByHero = ( <p>{ characters }</p>);

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4 ">
                        <img src={heroImageUrl} className="card-img" alt={ superhero } />

                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{alter_ego}</p>


                            {
                                (alter_ego !== characters) && characterByHero  
                                // (alter_ego !== characters) && ( <p>{ characters }</p>) Otra forma de hacer lo de arriba 

                            }
                            {/* <CharacterByHero characters={ characters } alter_ego={ alter_ego} /> Esta es una forma de realizar el ejercici de revisar si el alter_ego es igual al character */}

                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>
                 
                            <Link to={`/hero/${ id }`}>
                                Mas...
                            </Link>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
