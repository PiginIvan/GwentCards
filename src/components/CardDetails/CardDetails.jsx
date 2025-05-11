import { useGwent } from '../../context/GwentContext';

export const CardDetails = () => {
  const { selectedCard } = useGwent();

  if (!selectedCard) return null;

  const { attributes, id, name, category, ability, flavor } = selectedCard;
  const artUrl = `https://gwent.one/image/gwent/assets/card/art/medium/${id.art}.jpg`;

  return (
    <div className="card-details">
      <h2 className="card-name">{name}</h2>
      <div className="card-detail-container">
        <div className="card-detail-image">
          <img src={artUrl} alt={name} />
        </div>
        <div className="card-detail-info">
          <div className="card-info-block">   
            <h3>
              <img 
                src="https://gwent.one/img/icon/search/set/base.png" 
                alt="category icon" 
                width="50px" 
              /> 
              Category
            </h3>
            <p>{category}</p>
            
            <h3>
              <img 
                src="https://gwent.one/img/icon/search/faction/nilfgaard.png" 
                alt="ability icon" 
                width="50px" 
              /> 
              Ability
            </h3>
            <p>{ability || "—"}</p>
            
            <h3>
              <img 
                src="https://gwent.one/img/icon/search/set/thronebreaker.png" 
                alt="flavor icon" 
                width="50px" 
              /> 
              Flavor
            </h3>
            <p><em>{flavor || "—"}</em></p>
          </div>
          
          <div className="card-info-block">
            <h3>
              <img 
                src="https://gwent.one/img/icon/search/type/special.png" 
                alt="type icon" 
                width="50px" 
              /> 
              Type
            </h3>
            <p>{attributes.type}</p>
            
            <h3>
              <img 
                src="https://gwent.one/img/icon/search/faction/monster.png" 
                alt="faction icon" 
                width="50px" 
              /> 
              Faction
            </h3>
            <p>{attributes.faction}</p>
            
            {attributes.factionSecondary && (
              <>
                <h3>Доп. фракция</h3>
                <p>{attributes.factionSecondary}</p>
              </>
            )}
            
            <h3>
              <img 
                src="https://gwent.one/img/icon/search/set/master_mirror.png" 
                alt="color icon" 
                width="50px" 
              /> 
              Color
            </h3>
            <p>{attributes.color}</p>
            
            <h3>
              <img 
                src="https://gwent.one/img/icon/search/type/stratagem.png" 
                alt="set icon" 
                width="50px" 
              /> 
              Set
            </h3>
            <p>{attributes.set}</p>
            
            <h3>
              <img 
                src="https://gwent.one/img/icon/search/rarity/legendary.png" 
                alt="rarity icon" 
                width="50px" 
              /> 
              Rarity
            </h3>
            <p>{attributes.rarity}</p>
            
            <h3>
              <img 
                src="https://gwent.one/img/icon/search/faction/northern_realms.png" 
                alt="artist icon" 
                width="50px" 
              /> 
              Artist
            </h3>
            <p>{attributes.artist}</p>
          </div>
          
          <div className="card-info-block">
            <h3>
              <img 
                src="https://gwent.one/img/icon/search/set/iron_judgment.png" 
                alt="power icon" 
                width="50px" 
              /> 
              Power
            </h3>
            <p>{attributes.power}</p>
            
            <h3>
              <img 
                src="https://gwent.one/img/icon/search/type/unit.png" 
                alt="armor icon" 
                width="50px" 
              /> 
              Armor
            </h3>
            <p>{attributes.armor}</p>
            
            <h3>
              <img 
                src="https://gwent.one/img/icon/search/type/artifact.png" 
                alt="provision icon" 
                width="50px" 
              /> 
              Provision
            </h3>
            <p>{attributes.provision}</p>
          </div>
        </div>
      </div>
    </div>
  );
};