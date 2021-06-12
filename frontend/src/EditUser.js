import { useHistory, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import useFetch from './useFetch'

const EditUser = () => {
    const { username } = useParams();
    const { data: {firstname, surname, password, title, email, bio, joined, 
        location, availability, partnership_opportunities, interests}, error, isPending } = useFetch("/users/" + username)

    const history = useHistory();
    const oldUserDetails = {
        firstname: firstname,
        surname: surname,
        password: password,
        title: title,
        email: email,
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
                <button onClick={handleReturn}>Back to User Page</button>
            </div>
            <br />
            <h2>Edit user</h2>
            { isPending && <h2>Loading...</h2> }
            { firstname && <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstname">Firstname</label>
                <input {...register("firstname")}
                    placeholder="Input your first name here"
                />

                <label htmlFor="surname">Surname</label>
                <input {...register("surname")}
                    placeholder="Input surname here"
                />

                <label htmlFor="title">Title</label>
                <input {...register("title")}
                    placeholder="State your role at InAGlobe (eg: volunteer)"
                />

                <label htmlFor="password">Password</label>
                <input {...register("password")}
                    placeholder="Input the password"
                />

                <label htmlFor="email">Email</label>
                <input {...register("email")}
                    placeholder="Input InAGlobe email here"
                />


                <label htmlFor="bio">Bio</label>
                <input {...register("bio")}
                    placeholder="Tell your colleagues a bit about yourself"
                />

                {/* Think about changing type to force date */}
                <label htmlFor="joined">Joined</label>
                <input {...register("joined")}
                    placeholder="Eg: 20th April 2020"
                />


                <label htmlFor="location">Location</label>
                <input {...register("location")}
                    placeholder="Where are you currently based?"
                />

                <label htmlFor="availability">Availibility</label>
                <input {...register("availability")}
                    placeholder="How available are you approximately per week?"
                />

                <label htmlFor="partnership_opportunities">Partnership Opportunities</label>
                <input {...register("partnership_opportunities")}
                    placeholder="Eg: Department of Computing at Imperial College London"
                />

                <label htmlFor="interests">Interests</label>
                <input {...register("interests")}
                    placeholder="What are your hobbies?"
                />
                <button type="submit">Save user details</button>
            </form> }
        </div>
    );
}

export default EditUser;