import { Link, useHistory, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import useFetch from './useFetch'

const EditUser = () => {
    const { username } = useParams();
    const { data: { firstname, surname, password, title, email, phone_no, bio, joined,
        location, availability, partnership_opportunities, interests }, error, isPending } = useFetch("/users/" + username)

    const history = useHistory();
    const oldUserDetails = {
        firstname: firstname,
        surname: surname,
        password: password,
        title: title,
        email: email,
        phone_no: phone_no,
        bio: bio,
        joined: joined,
        location: location,
        availability: availability,
        partnership_opportunities: partnership_opportunities,
        interests: interests,
    }

    const { register, handleSubmit } = useForm({
        defaultValues: oldUserDetails
    });

    const onSubmit = e => {
        fetch("/users/" + username, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(e)
        }).then(() => {
            history.push('/');
        })
    }

    const handleReturn = e => {
        history.push('/users/' + username);
    }

    return (
        <div className="edit-user">
            <div className="ret-prev-page">
                <button onClick={handleReturn}>To User Page</button>
            </div>
            <br />
            <h2>Edit user</h2>
            {isPending && <h2>Loading...</h2>}
            <Link to={`/users/change-password`}>Change Password</Link>
            {firstname && <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstname">Firstname</label>
                <input {...register("firstname")}
                    placeholder="Input your first name here"
                    defaultValue={firstname}
                />

                <label htmlFor="surname">Surname</label>
                <input {...register("surname")}
                    placeholder="Input surname here"
                    defaultValue={surname}
                />

                <label htmlFor="title">Title</label>
                <input {...register("title")}
                    placeholder="State your role at InAGlobe (eg: volunteer)"
                    defaultValue={title}
                />

                <label htmlFor="password">Password (click link above to change password)</label>
                <input {...register("password")}
                    disabled
                    placeholder="Input the password"
                    defaultValue={password}
                />


                <label htmlFor="email">Email</label>
                <input {...register("email")}
                    placeholder="Input InAGlobe email here"
                    defaultValue={email}
                />

                <label htmlFor="phone_no">Phone number</label>
                <input {...register("phone_no")}
                    placeholder="Input phone number here"
                    defaultValue={phone_no}
                />


                <label htmlFor="bio">Bio</label>
                <input {...register("bio")}
                    placeholder="Tell your colleagues a bit about yourself"
                    defaultValue={bio}
                />

                <label htmlFor="joined">Joined</label>
                <input {...register("joined")}
                    placeholder="Eg: 20th April 2020"
                    type="date"
                    defaultValue={joined}
                />

                <label htmlFor="location">Location</label>
                <input {...register("location")}
                    placeholder="Where are you currently based?"
                    defaultValue={location}
                />

                <label htmlFor="availability">Availibility (hours per week)</label>
                <input {...register("availability")}
                    placeholder="How available are you approximately per week?"
                    defaultValue={availability}
                />

                <label htmlFor="interests">Interests</label>
                <input {...register("interests")}
                    placeholder="What are your hobbies?"
                    defaultValue={interests}
                />

                <label htmlFor="partnership_opportunities">Partnership Opportunities</label>
                <input {...register("partnership_opportunities")}
                    placeholder="Eg: Department of Computing at Imperial College London"
                    defaultValue={partnership_opportunities}
                />
                <button type="submit">Save user details</button>
            </form>}
        </div>
    );
}

export default EditUser;