function DeadCheck(choice, jackAlive, oliverAlive) {
    if (choice.requiresJackAlive && !jackAlive) {
      alert('Jack is not alive, you cannot make this choice!');
      return false;
    }
    if (choice.requiresOliverAlive && !oliverAlive) {
      alert('Oliver is not alive, you cannot make this choice!');
      return false;
    }
    return true; 
  }
  
export default DeadCheck