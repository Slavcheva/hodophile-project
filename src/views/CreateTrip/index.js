/*eslint-disable no-undef*/
import React from 'react'
import postService from '../../services/post-service'
import './style.css'

const CreateTrip = ({history}) => {

    const myWidget = cloudinary.createUploadWidget({
            cloudName: 'ddqnlumxi',
            apiKey: '575777631369157',
            uploadPreset: 'ml_default'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                inputImageRef.current = result.info.url
            }
        }
    )


    const [error, setError] = React.useState('')

    const inputRef = React.useRef(''), textareaRef = React.useRef(''), inputImageRef = React.useRef(''),
        createPost = React.useCallback(() => {


            const destination = inputRef.current.value;
            const description = textareaRef.current.value;
            const imageUrl = inputImageRef.current;

            if (destination === '' || description === '' || imageUrl === '') {
                setError('All fields are mandatory!');
            } else {
                setError(null)
            }

            postService.create({destination: destination, description: description, imageUrl: imageUrl}).then(() => {
                history.push('/trips');
            })

        }, [textareaRef, inputRef, inputImageRef, history]);

    return (
        <div className="form-wrapper">
            <form>
                <div className="form-group">
                    <h3>Destination</h3>
                    <input ref={inputRef} required="required"/>
                </div>
                <div className=' form-group'>
                    <h3>Write here your trip note...</h3>
                    <textarea ref={textareaRef}/>
                </div>

                <div className="form-group">
                    <h3>Upload photo...</h3>
                    <button type="button" id="upload_widget" onClick={() => myWidget.open()}
                            className="cloudinary-button">Upload files
                    </button>

                </div>
                <div className="form-group">
                    {error ? (<div className='error'>{error}</div>) : null}
                    <button type="button" onClick={createPost}>Create Post</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTrip;
