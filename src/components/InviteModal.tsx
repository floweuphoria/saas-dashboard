import React, { useState, useEffect } from 'react'
import { X, Plus, Trash2 } from 'lucide-react'
import * as Frigade from '@frigade/react'

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const generateRandomEmail = () => {
  const firstNames = ['alex', 'sarah', 'mike', 'emma', 'david', 'lisa', 'john', 'anna', 'chris', 'maria'];
  const lastNames = ['smith', 'johnson', 'williams', 'jones', 'brown', 'davis', 'miller', 'wilson', 'moore', 'taylor'];
  const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com'];
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  const randomNum = Math.floor(Math.random() * 999) + 1;
  
  return `${firstName}.${lastName}${randomNum}@${domain}`;
};

export const InviteModal: React.FC<InviteModalProps> = ({ isOpen, onClose }) => {
  const [emails, setEmails] = useState<string[]>(['']);
  const { flow } = Frigade.useFlow('flow_E4E2crtW');

  useEffect(() => {
    if (isOpen) {
      setEmails([generateRandomEmail()]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const addEmailField = () => {
    setEmails([...emails, '']);
  };

  const removeEmailField = (index: number) => {
    if (emails.length > 1) {
      setEmails(emails.filter((_, i) => i !== index));
    }
  };

  const updateEmail = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleInvite = () => {
    const validEmails = emails.filter(email => email.trim() && email.includes('@'));
    if (validEmails.length > 0) {
      // Here you would typically send the invites
      console.log('Inviting:', validEmails);
      
      // Mark the invite teammates flow as completed
      const inviteStep = flow?.steps.get('invite-members');
      if (inviteStep) {
        inviteStep.complete();
      }
      
      onClose();
      setEmails(['']); // Reset form
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Invite Members</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email addresses
          </label>
          <div className="space-y-2">
            {emails.map((email, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => updateEmail(index, e.target.value)}
                  placeholder="Enter email address"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                {emails.length > 1 && (
                  <button
                    onClick={() => removeEmailField(index)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
          
          <button
            onClick={addEmailField}
            className="mt-2 flex items-center text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <Plus size={16} className="mr-1" />
            Add another email
          </button>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleInvite}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Send Invites
          </button>
        </div>
      </div>
    </div>
  );
};