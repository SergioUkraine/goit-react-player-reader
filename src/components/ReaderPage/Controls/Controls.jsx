import { Containter, ChangeButton } from './Controls.styled';

function Controls({ onChange }) {
  return (
    <Containter>
      <ChangeButton
        type="button"
        // disabled={currentIndex === 0}
        onClick={() => {
          onChange(-1);
        }}
      >
        Back
      </ChangeButton>
      <ChangeButton
        type="button"
        // disabled={currentIndex >= items.length - 1}
        onClick={() => {
          onChange(1);
        }}
      >
        Forward
      </ChangeButton>
    </Containter>
  );
}

export default Controls;
