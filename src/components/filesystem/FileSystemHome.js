import image from "./images/filedb.jpg"

const FileSystemHome = () => {
    return (
        <div className="columns is-centered is-vcentered mt-3">
            <div className="column is-6 has-text-centered">
                <div className="title">Lets get the answer for most controversial debate.</div>
                <div>A  file system  defines how files are  named,  stored, and  retrieved  from a storage device.</div>
                <div>Every time you open a file on your computer or smart device, your operating system uses its file system internally to load it from the storage device.</div>
                <div>Or when you copy, edit, or delete a file, the file system handles it under the hood.</div>
                <div>Whenever you download a file or access a web page over the Internet, a file system is involved too.</div>
            </div>
            <div className="column is-6 has-text-centered">
                <img src={image} alt="File vs DBMS" width={300} />
            </div>
        </div>
    )
}
export default FileSystemHome;