export class DC {
    constructor(id, pw = null) {
        this._id = id;
        this._pw = pw;
        this._galls = [];
        this._signed = false;

        if(this._pw != null) {
            this.signin();
            if(!this._signed)
                throw 'Wrong credential';
        }
    }

    signin(pw = null) {
        throw 'not implemented';
    }

    signout() {
        throw 'not implemented';
    }

    make_notice(gall_id, article_id) {
        throw 'not implemented';
    }

    cancle_notice(gall_id, article_id) {
        throw 'not implemented';
    }

    re_up_single(gall_id, article_id) {
        this.make_notice(gall_id, article_id);
        this.cancle_notice(gall_id, article_id);
    }
    
    re_up_multi(gall_id, aritlce_ids) {
        aritlce_ids.foreach((aid) => {
            this.re_up_single(gall_id, aid);
        });
    }
}