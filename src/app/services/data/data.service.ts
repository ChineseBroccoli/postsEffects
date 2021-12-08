import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, docData } from '@angular/fire/firestore';
import { addDoc, deleteDoc, updateDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore: Firestore) {}

  getPosts(): Observable<Post[]> {
    const postsCollectionRef = collection(this.firestore, 'posts');
    return collectionData(postsCollectionRef, { idField: 'id' }) as Observable<Post[]>;
  }

  getPost(id: string): Observable<Post> {
    const postDocRef = doc(this.firestore, 'posts', id);
    return docData(postDocRef, { idField: 'id' }) as Observable<Post>;
  }

  addPost(post: Post) {
    const postsCollectionRef = collection(this.firestore, 'posts');
    return addDoc(postsCollectionRef, post);
  }

  deletePost(id: string) {
    const postDocRef = doc(this.firestore, 'posts', id);
    return deleteDoc(postDocRef);
  }

  updatePost(id:string, post: Post)
  {
    const postDocRef = doc(this.firestore, 'posts', id);
    return updateDoc(postDocRef, {...post});
  }
}
