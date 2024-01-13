class Reader{
    ToRead(path){
        return 'file content'
    }
}

class Writer{
    ToWrite(file, content){
        console.log('write content!')
    }
}

class Creator{
    ToCreate(name){
        console.log('Created file!')
    }
}

class Destroyer{
    Delete(name){
        console.log('Deleting file!')
    }
}

class FileHandler{
    constructor(name){
        this.file = name
        this.reader = new Reader()
        this.writer = new Writer()
        this.creator = new Creator()
        this.destroyer = new Destroyer()
    }
}

class PdfCreator{
    Creator(){
        console.log('Creating pdf file...')
    }
}

class userManager{
    constructor(){
        this.creator = new PdfCreator()
        this.writer = new Writer()
    }

    SaveUsersList(list){
        this.creator.ToCreate('users.txt')
        this.writer.ToWrite('users.txt')
    }

}

var manipulator = new FileHandler('myFile.txt')

manipulator.reader.ToRead();
manipulator.writer.ToWrite()
manipulator.creator.ToCreate()
manipulator.destroyer.Delete()

var users = new userManager()

users.SaveUsersList(['Thiago', 'Martins'])