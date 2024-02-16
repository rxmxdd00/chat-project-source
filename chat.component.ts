    createChatRoom () {
        try {
            this.selectedFile ? this.selectedFile : {};
            const firestoreDb = this.firestore.firestore;
            const dateNow = new Date();
            const creater = {
                uid : this.userDetails.uid,
                displayName: this.userDetails.displayName
            }
            let participant = this.chatRoomForm.value.participant;
            const firstMessage = {
                message : this.chatRoomForm.value.msgValue,
                file : this.selectedFile,
                createdAt : dateNow.getTime(),
                senderId :  this.userDetails.uid
            }
            this._customChatService.createChatRoom(firestoreDb, creater, participant, firstMessage);
            this.resetForm();
            this.removeFile();
        }catch (error) {
            console.error('Error joining chat room:', error);
        }
       
    }
