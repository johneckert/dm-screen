import { TextField } from '@mui/material';
import { GenericCardContent } from '../../../interfaces';

const MosnterCardForm: React.FC<{
  title: string;
  content: GenericCardContent;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<GenericCardContent>> | ((content: GenericCardContent) => void);
}> = ({ title, content, setTitle, setContent }) => {
  return (
    <div data-testid="monster-form">
      <TextField
        id="modal-title"
        label="Monster Name"
        sx={{ paddingBottom: 2 }}
        fullWidth
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        data-testid="title-input"
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
        id="modal-type"
        label="Type"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.type}
        onChange={(e) => setContent({ ...content, type: e.target.value })}
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
        id="modal-vulnerabilities"
        label="Vulnerabilties"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.vulnerabilities}
        onChange={(e) => setContent({ ...content, vulnerabilities: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-resistances"
        label="Resistances"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.resistances}
        onChange={(e) => setContent({ ...content, resistances: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-dmg-immunities"
        label="Damage Immunities"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.damageImmunities}
        onChange={(e) => setContent({ ...content, damageImmunities: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-cond-immmunities"
        label="Condition Immunities"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.conditionImmunities}
        onChange={(e) => setContent({ ...content, conditionImmunities: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-proficincies"
        label="Proficincies"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.proficiencies}
        onChange={(e) => setContent({ ...content, proficiencies: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-senses"
        label="Senses"
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.senses}
        onChange={(e) => setContent({ ...content, senses: e.target.value })}
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
        id="modal-cr"
        label="Challenge Rating"
        fullWidth
        sx={{ paddingBottom: 2 }}
        variant="outlined"
        value={content.challengeRating}
        onChange={(e) => setContent({ ...content, challengeRating: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-special-abilities"
        label="Special Abilties"
        fullWidth
        variant="outlined"
        sx={{ paddingBottom: 2 }}
        multiline
        rows={18}
        value={content.specialAbilities}
        onChange={(e) => setContent({ ...content, specialAbilities: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-actions"
        label="Actions"
        fullWidth
        variant="outlined"
        sx={{ paddingBottom: 2 }}
        multiline
        rows={18}
        value={content.actions}
        onChange={(e) => setContent({ ...content, actions: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-legendary-actions"
        label="Legendary Actions"
        fullWidth
        variant="outlined"
        sx={{ paddingBottom: 2 }}
        multiline
        rows={18}
        value={content.legendaryActions}
        onChange={(e) => setContent({ ...content, legendaryActions: e.target.value })}
        data-testid="content-input"
      />
      <TextField
        id="modal-description"
        label="Decription"
        fullWidth
        variant="outlined"
        sx={{ paddingBottom: 2 }}
        multiline
        rows={18}
        value={content.description}
        onChange={(e) => setContent({ ...content, description: e.target.value })}
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
      <TextField
        id="modal-image"
        label="Image URL"
        fullWidth
        variant="outlined"
        sx={{ paddingBottom: 2 }}
        multiline
        rows={18}
        value={content.image}
        onChange={(e) => setContent({ ...content, image: e.target.value })}
        data-testid="content-input"
      />
    </div>
  );
};

export default MosnterCardForm;
