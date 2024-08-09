import Heading from "../../../../components/Heading";

export function generateMetadata({ params: { contact } }) {
  return {
    title: contact,
  };
}

const Contact = () => {
  return (
    <>
      <Heading text="Jack" />
    </>
  );
};
export default Contact;
