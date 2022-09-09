/*eslint-disable no-undef*/
import React from 'react'
import postService from '../../services/post-service'

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
            <h2>Write trip note</h2>
            <form>
                <div className="form-group">
                    <label>Destination</label>
                    <input ref={inputRef} required="required"/>
                </div>
                <div className=' form-group'>
                    <label>Write here your trip note...</label>
                    <textarea ref={textareaRef}/>
                </div>
                <div className="form-group">
                    <button type="button" id="upload_widget" onClick={() => myWidget.open()}
                            className="cloudinary-button">Upload photo
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
