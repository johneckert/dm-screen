import { TextField } from '@mui/material';
import { PlayerCardContent } from '../../../interfaces';

const PlayerCardForm: React.FC<{
  title: string;
  content: PlayerCardContent;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<PlayerCardContent>> | ((content: PlayerCardContent) => void);
}> = ({ title, content, setTitle, setContent }) => {
  return (
    <div data-testid="player-form">
      <TextField
        id="modal-title"
        label="Character Name"
        sx={{ paddingBottom: 2 }}
        fullWidth
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        data-testid="title-input"
      />
      <TextField
        id="modal-race"
        label="Race"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.charRace}
        onChange={(e) => setContent({ ...content, charRace: e.target.value })}
      />
      <TextField
        id="modal-class"
        label="Class"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.charClass}
        onChange={(e) => setContent({ ...content, charClass: e.target.value })}
      />
      <TextField
        id="modal-alignment"
        label="Alignment"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.alignment}
        onChange={(e) => setContent({ ...content, alignment: e.target.value })}
      />
      <TextField
        id="modal-size"
        label="Size"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.size}
        onChange={(e) => setContent({ ...content, size: e.target.value })}
      />
      <TextField
        id="modal-strength"
        label="STR"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.strength}
        onChange={(e) => setContent({ ...content, strength: e.target.value })}
      />
      <TextField
        id="modal-dexterity"
        label="DEX"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.dexterity}
        onChange={(e) => setContent({ ...content, dexterity: e.target.value })}
      />
      <TextField
        id="modal-strength"
        label="CON"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.constitution}
        onChange={(e) => setContent({ ...content, constitution: e.target.value })}
      />
      <TextField
        id="modal-intelligence"
        label="INT"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.intelligence}
        onChange={(e) => setContent({ ...content, intelligence: e.target.value })}
      />
      <TextField
        id="modal-wisdom"
        label="WIS"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.wisdom}
        onChange={(e) => setContent({ ...content, wisdom: e.target.value })}
      />
      <TextField
        id="modal-charisma"
        label="CHA"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.charisma}
        onChange={(e) => setContent({ ...content, charisma: e.target.value })}
      />
      <TextField
        id="modal-hp"
        label="Level"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.charLevel}
        onChange={(e) => setContent({ ...content, charLevel: e.target.value })}
      />
      <TextField
        id="modal-background"
        label="Background"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.charBackground}
        onChange={(e) => setContent({ ...content, charBackground: e.target.value })}
      />
      <TextField
        id="modal-hp"
        label="HP"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.hp}
        onChange={(e) => setContent({ ...content, hp: e.target.value })}
      />
      <TextField
        id="modal-ac"
        label="AC"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.ac}
        onChange={(e) => setContent({ ...content, ac: e.target.value })}
      />
      <TextField
        id="modal-speed"
        label="Speed"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.speed}
        onChange={(e) => setContent({ ...content, speed: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-passive-perception"
        label="Passive Perception"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.passivePerception}
        onChange={(e) => setContent({ ...content, passivePerception: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-passive-investigation"
        label="Passive Investigation"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.passiveInvestigation}
        onChange={(e) => setContent({ ...content, passiveInvestigation: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-passive-stealth"
        label="Passive Stealth"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.passiveStealth}
        onChange={(e) => setContent({ ...content, passiveStealth: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-passive-insight"
        label="Passive Insight"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.passiveInsight}
        onChange={(e) => setContent({ ...content, passiveInsight: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-spell-casting-ability"
        label="Spell Casting Ability"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.spellCastingAbility}
        onChange={(e) => setContent({ ...content, spellCastingAbility: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-spell-casting-modifier"
        label="Spell Casting Modifier"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.spellCastingModifier}
        onChange={(e) => setContent({ ...content, spellCastingModifier: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-spell-save-dc"
        label="Spell Save DC"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.spellSaveDC}
        onChange={(e) => setContent({ ...content, spellSaveDC: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-spell-attack-bonus"
        label="Spell Attack Bonus"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.spellAttackBonus}
        onChange={(e) => setContent({ ...content, spellAttackBonus: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-languages"
        label="Languages"
        fullWidth
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.languages}
        onChange={(e) => setContent({ ...content, languages: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-link"
        label="Character Sheet Link"
        fullWidth
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.link}
        onChange={(e) => setContent({ ...content, link: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-content"
        label="Notes"
        fullWidth
        variant="outlined"
        sx={{ paddingBottom: 2 }}
        multiline
        rows={18}
        value={content.content}
        onChange={(e) => setContent({ ...content, content: e.target.value })}
        data-testid="content-input"
      />
    </div>
  );
};

export default PlayerCardForm;
