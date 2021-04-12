{
    class Myself{
        static _version = '1.0.0.0';
        static _name = 'siroi';
        static _blog = 'www.siroi.top';
        static _info(){
            return `%c Author : ${this._name} `;
        }
    }
    console.log(Myself._info(),"background-color:black;color:white",Myself._blog);
}