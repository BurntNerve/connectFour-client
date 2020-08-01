export class BoardToken {
    constructor(id) {
        this.isMine = null;
        this.id = id;
    }

    isMine: boolean;
    id: number;
}