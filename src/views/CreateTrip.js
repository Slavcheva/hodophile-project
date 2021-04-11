import React from 'react'
import postService from '../services/post-service'


// const CreatePost = ({history}) => {
//     const textareaRef = React.useRef();
//     const inputRef = React.useRef();
//
//     const createPost = React.useCallback(() => {
//         const value = textareaRef.current.value;
//         const inputValue = inputRef.current.value;
//         postService.create({description: value,destination:inputValue}).then(() => {
//             history.push('/');
//         });
//     }, [textareaRef, inputRef, history]);
//
//     return <div className="CreatePost">
//         <form>
//             <input ref={inputRef}></input>
//             <textarea ref={textareaRef}></textarea>
//             <button type="button" onClick={createPost}>Create Post</button>
//         </form>
//     </div>;
// }
//
// export default CreatePost;
const CreateTrip = ({history}) => {
    const textareaRef = React.useRef(''), inputRef = React.useRef(''), inputImageRef = React.useRef(''),
        createPost = React.useCallback(() => {

            const description = textareaRef.current.value;
            const destination = inputRef.current.value;
            const imageUrl = inputImageRef.current.value;
            postService.create({description: description, destination: destination, imageUrl: imageUrl}).then(() => {
                history.push('/trips');
            });
        }, [textareaRef, inputRef, inputImageRef, history]);

    return <div className="CreatePost">
        <form>
            <div className="form-group">
                <h5>Дестинация</h5>
                <input type="text" ref={inputRef}/>
            </div>
            <div className='form-group'>
                <h5>Разкажете ни за вашето пътешествие...</h5>
                <textarea ref={textareaRef}/>
            </div>
            <div className="form-group">
                <h5>Сложете линк към снимка...</h5>
                <input type="text" ref={inputImageRef}/>
            </div>
            <button type="button" onClick={createPost}>Create Post</button>
        </form>
    </div>;
}

export default CreateTrip;

// class CreateTrip extends React.Component {
//     state = {
//         post: ''
//     }
//     descriptionChangeHandler = this.props.controlChangeHandlerFactory('description');
//     tipsChangeHandler = this.props.controlChangeHandlerFactory('tips');
//
//     // changeHandler = (event) => (
//     //     this.setState({value: event.target.value})
//     // )
//     submitHandler = (event) => {
//         // event.preventDefault();
//         const {description, tips} = this.props.getFormState()
//         console.log(description, tips)
//     }
//
//     render() {
//         const {description, tips} = this.props.getFormState()
//         return (
//
//             <div className="form-wrapper">
//             <form >
//                 <div className='form-group'>
//                     <h2>Разкажете ни за вашето пътешествие...</h2>
//                     <textarea value={description} onChange={this.descriptionChangeHandler}/>
//                 </div>
//                 <div className='form-group'>
//                     <h2>Споделете полезни съвети...</h2>
//                     <textarea value={tips} onChange={this.tipsChangeHandler}/>
//                 </div>
//                 {/*<div className="file-upload">*/}
//                 {/*    <h2>Покажете ни вашите снимки...</h2>*/}
//                 {/*    <label htmlFor="inputFile">Може да качите само 10 снимки</label>*/}
//                 {/*    <input type="file"/>*/}
//                 {/*</div>*/}
//                 <button type="button" onSubmit={this.submitHandler}>Submit</button>
//             </form>
//             </div>
//         )
//     }
// }
//
// const initialFormState = {
//     description: '',
//     tips: '',
// }
// export default withForm(CreateTrip, initialFormState)
