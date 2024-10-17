export default function Tabs({ children, buttons, buttonsContainer:ButtonsContainer}) {
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  );
}
