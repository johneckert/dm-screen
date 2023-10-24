import { TextField } from '@mui/material';
import { GenericCardContent } from '../../../interfaces';

const PlayerCardForm: React.FC<{
  title: string;
  content: GenericCardContent;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<GenericCardContent>> | ((content: GenericCardContent) => void);
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
        value={content.link}
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
