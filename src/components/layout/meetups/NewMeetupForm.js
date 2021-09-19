import Card from "../../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputref = useRef();
  const imageInputref = useRef();
  const addressInputref = useRef();
  const descrptionInputref = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputref.current.value;
    const enteredImage = imageInputref.current.value;
    const enteredAddress = addressInputref.current.value;
    const enteredDescrption = descrptionInputref.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescrption,
    };
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" ref={titleInputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="desscription">Descrption</label>
          <input type="text" required row="5" ref={descrptionInputref} />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
